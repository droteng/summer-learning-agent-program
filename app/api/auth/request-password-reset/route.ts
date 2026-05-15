import { NextResponse } from "next/server";
import {
  lookupAccountByEmail,
  mintEmailToken,
  TOKEN_KINDS
} from "../../../../src/agents/authAgent.js";
import { createEmailSender } from "../../../../src/integrations/email.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  // Always return 200 — don't leak whether the email exists.
  const account = await lookupAccountByEmail(email);
  if (!account?.id) {
    return NextResponse.json({ ok: true });
  }

  const token = await mintEmailToken({
    accountId: account.id,
    email,
    kind: TOKEN_KINDS.RESET_PASSWORD
  });

  const appUrl = process.env.APP_URL ?? new URL(request.url).origin;
  const link = `${appUrl}/parent/reset-password?token=${encodeURIComponent(token)}`;

  const sender = createEmailSender();
  try {
    await sender.send({
      to: email,
      subject: "Reset your Dr. Spark Academy password",
      html: `<p>Hi ${escapeHtml(account.parent?.name ?? "there")},</p>
<p>Use the link below within 1 hour to set a new password.</p>
<p><a href="${link}" style="display:inline-block;padding:10px 20px;background:#f97316;color:white;border-radius:999px;text-decoration:none;font-weight:700">Reset password</a></p>
<p>If you didn't request this, you can ignore this email — your password won't change.</p>
<p>— Dr. Spark Academy</p>`,
      text: `Reset your Dr. Spark Academy password\n\nUse this link within 1 hour: ${link}\n\nIf you didn't request this, ignore this email.`
    });
  } catch (err) {
    // Don't surface email-send failures to the client. Log + still return ok.
    // eslint-disable-next-line no-console
    console.error("[password_reset] send failed", err);
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );
}
