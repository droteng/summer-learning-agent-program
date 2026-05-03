import { NextResponse } from "next/server";
import {
  approveInvitationRequest,
  createInvitationRequest
} from "../../../src/agents/socialCoordinatorAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const invitationRequest = createInvitationRequest({
    child: payload.studentProfile,
    friendName: payload.friendName,
    parentPolicy: payload.parentPolicy
  });

  if (payload.approve && invitationRequest.status === "needs_parent_approval") {
    return NextResponse.json(
      approveInvitationRequest({
        invitationRequest,
        baseUrl: payload.baseUrl
      })
    );
  }

  return NextResponse.json(invitationRequest);
}
