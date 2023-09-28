import { Schema, model, models } from "mongoose";

const messageSchema = new Schema(
  {
    ip: String,
    ua: String,
    message: String,
  },
  { timestamps: true }
);

const Message = models.Message || model("Message", messageSchema);

export default Message;
