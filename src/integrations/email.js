// Email delivery via Resend's REST API. No SDK dependency.
//
// Usage:
//   const email = createEmailSender({ apiKey: env.RESEND_API_KEY });
//   await email.send({ to, subject, html });
//
// When no apiKey is configured, the sender writes the email to stdout
// instead. Useful for local dev and CI — the verification/reset links
// show up in the dev-server log so you can copy them into a browser.

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export class EmailError extends Error {
  constructor(code, message, status) {
    super(message);
    this.name = "EmailError";
    this.code = code;
    this.status = status;
  }
}

export function createEmailSender({
  apiKey = process.env.RESEND_API_KEY,
  from = process.env.EMAIL_FROM ?? "Dr. Spark Academy <onboarding@resend.dev>",
  fetchImpl = globalThis.fetch,
  logImpl = (line) => process.stderr.write(`${line}\n`)
} = {}) {
  return {
    name: apiKey ? "resend" : "log",
    async send({ to, subject, html, text }) {
      if (!apiKey) {
        // Dev fallback. Don't ever return a fake success in prod — caller
        // can check sender.name === "log" if it needs to alert.
        logImpl(`[email-log] to=${to} subject="${subject}"`);
        if (text) logImpl(`[email-log] text=${text.replace(/\n/g, " \\n ")}`);
        if (html) logImpl(`[email-log] html=${html.slice(0, 240)}...`);
        return { provider: "log", id: null };
      }
      const res = await fetchImpl(RESEND_ENDPOINT, {
        method: "POST",
        headers: {
          authorization: `Bearer ${apiKey}`,
          "content-type": "application/json"
        },
        body: JSON.stringify({ from, to: Array.isArray(to) ? to : [to], subject, html, text })
      });
      if (!res.ok) {
        const detail = await safeJson(res);
        throw new EmailError(
          detail?.name ?? `resend_${res.status}`,
          detail?.message ?? `Resend ${res.status}`,
          res.status
        );
      }
      const data = await res.json();
      return { provider: "resend", id: data?.id ?? null };
    }
  };
}

async function safeJson(res) {
  try {
    return await res.json();
  } catch {
    return null;
  }
}
