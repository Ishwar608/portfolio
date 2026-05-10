import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().optional(),
  message: z.string().min(20),
  honeypot: z.string().max(0),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Wire to email (Resend, SES, etc.) or a CRM here. For now we acknowledge receipt.
  return NextResponse.json({ ok: true });
}
