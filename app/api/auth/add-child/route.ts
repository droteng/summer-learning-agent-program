import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME, currentUser, addChildToAccount } from "../../../../src/agents/authAgent.js";
import { resolveEntitlement } from "../../../../src/agents/entitlementAgent.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const store = await cookies();
  const sessionId = store.get(COOKIE_NAME)?.value;
  const user = await currentUser(sessionId);
  if (!user || user.role !== "parent") {
    return NextResponse.json({ error: "not_signed_in" }, { status: 401 });
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Cap child count by the parent's plan tier. Look up entitlement
  // using the existing child id so it reads the right subscription.
  const entitlement = await resolveEntitlement({ studentId: user.childId ?? "" });

  const result = await addChildToAccount({
    accountId: user.accountId,
    firstName: body?.firstName,
    gradeLevel: body?.gradeLevel,
    pin: body?.pin,
    maxChildren: entitlement.maxChildren
  });

  if (result.status === "error") {
    return NextResponse.json(
      { error: result.code, message: result.message },
      { status: result.code === "max_children_reached" ? 402 : 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    child: { id: result.child.id, firstName: result.child.firstName, gradeLevel: result.child.gradeLevel }
  });
}
