import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  COOKIE_NAME,
  currentUser,
  mintEmailToken,
  TOKEN_KINDS
} from "../../../../src/agents/authAgent.js";
import { createEmailSender } from "../../../../src/integrations/email.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const store = await cookies();
  const sessionId = store.get(COOKIE_NAME)?.value;
  const user = await currentUser(sessionId);
  if (!user || user.role !== "parent" || !user.parentEmail) {
    return NextResponse.json({ error: "not_signed_in" }, { status: 401 });
  }
  if (user.emailVerified) {
    return NextResponse.json({ ok: true, alreadyVerified: true });
  }

  const token = await mintEmailToken({
    accountId: user.accountId,
    email: user.parentEmail,
    kind: TOKEN_KINDS.VERIFY_EMAIL
  });

  const appUrl = process.env.APP_URL ?? new URL(request.url).origin;
  const link = `${appUrl}/api/auth/verify-email?token=${encodeURIComponent(token)}`;
  const sender = createEmailSender();

  try {
    await sender.send({
      to: user.parentEmail,
      subject: "Verify your Dr. Spark Academy email",
      html: `<p>Hi ${escapeHtml(user.parentName ?? "there")},</p>
<p>Click the link below to verify this email address. Verifying confirms that you own the inbox we'll send progress reports + reset links to.</p>
<p><a href="${link}" style="display:inline-block;padding:10px 20px;background:#f97316;color:white;border-radius:999px;text-decoration:none;font-weight:700">Verify email</a></p>
<p>Link expires in 24 hours. If you didn't sign up for Dr. Spark Academy, you can ignore this email.</p>
<p>— Dr. Spark Academy</p>`,
      text: `Verify your Dr. Spark Academy email\n\nClick to verify within 24 hours: ${link}`
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[verify_email] send failed", err);
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );
}
