import mongoose, { Document } from "mongoose";

export interface ChatMessageDocument extends Document {
  username: string;
  message: string;
  timestamp: Date;
}

const chatMessageSchema = new mongoose.Schema<ChatMessageDocument>({
  username: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const ChatMessage = mongoose.model<ChatMessageDocument>(
  "ChatMessage",
  chatMessageSchema,
);

export default ChatMessage;
