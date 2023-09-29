import Message from "@/models/Message";
import db from "@/utils/db";
import Link from "next/link";

async function getData() {
  let messages;

  try {
    await db();
    messages = await Message.find().sort({ createdAt: -1 });
  } catch (err) {
    return null;
  }

  return messages;
}

export default async function Page() {
  const data = await getData();

  return data == null ? (
    <h1 className="text-3xl font-bold">Failed to fetch messages</h1>
  ) : (
    <div className="text-white p-5">
      <h1 className="text-3xl font-bold">Messages</h1>
      {data.map((message) => (
        <div
          key={message._id}
          className="p-3 bg-slate-300 rounded-lg text-slate-700 mt-3 w-72"
        >
          <a href={"http://ip-api.com/json/" + message.ip} target="_blank">
            {message.ip}
          </a>
          <br />
          <span className="text-xs">{message.ua}</span>
          <p className="text-xl my-3">{message.message}</p>
          <p className="text-xs">{message.createdAt.toString()}</p>
          <br />
          <Link
            href={"admin/delete?id=" + message.id}
            className="bg-red-500 rounded-lg py-2 px-3 mr-1 text-white mt-3"
          >
            Delete
          </Link>
          <Link
            href={"admin/answer?message=" + message.message}
            className="bg-blue-600 rounded-lg py-2 px-3 mr-1 text-white mt-3"
          >
            Answer
          </Link>
        </div>
      ))}
    </div>
  );
}
