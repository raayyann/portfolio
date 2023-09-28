import Message from "@/models/Message";
import db from "@/utils/db";
import { NextRequest, NextResponse as res } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return res.json({ success: false }, { status: 400 });

  try {
    await db();
    await Message.deleteOne({ _id: id });
  } catch (err) {
    return res.json(
      { success: false, message: "Something went wrong!" },
      { status: 500 }
    );
  }

  return res.json({ success: true });
}
