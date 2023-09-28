import Message from "@/models/Message";
import db from "@/utils/db";
import { NextResponse as res } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const ip = body.ip;
  const ua = req.headers.get("user-agent");
  const message = body.message;

  if (!message)
    return res.json(
      { success: false, message: "Message is required!" },
      {
        status: 400,
      }
    );

  try {
    await db();
  } catch (err) {
    return res.json(
      { success: false, message: "Something went wrong!" },
      { status: 500 }
    );
  }

  await Message.create({ ip, ua, message });

  return res.json({ success: true });
}
