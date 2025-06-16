import express from "express";
import { createServer } from "http";
import { WebSocket, WebSocketServer } from "ws";
import cors from "cors";
import { connectDB } from "./config/db.config";
import ChatMessage from "./models/chat-message.model";

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

connectDB();

app.use(cors());

interface Client {
  socket: WebSocket;
  username: string;
}

let clients: Client[] = [];

wss.on("connection", (socket) => {
  let username = "";

  socket.on("message", async (data) => {
    const parsed = JSON.parse(data.toString());

    if (parsed.type === "JOIN") {
      username = parsed.username;
      clients.push({ socket, username });

      const recentMessages = await ChatMessage.find()
        .sort({ timestamp: -1 })
        .limit(50)
        .lean();
      socket.send(
        JSON.stringify({ type: "HISTORY", messages: recentMessages.reverse() }),
      );
    }

    if (parsed.type === "MESSAGE") {
      const message = new ChatMessage({
        username,
        message: parsed.message,
        timestamp: new Date(),
      });
      await message.save();

      const payload = JSON.stringify({
        type: "NEW_MESSAGE",
        username,
        message: parsed.message,
        timestamp: message.timestamp,
      });

      clients.forEach((client) => client.socket.send(payload));
    }
  });

  socket.on("close", () => {
    clients = clients.filter((client) => client.socket !== socket);
  });
});

server.listen(4000, () => {
  console.log("Server started on http://localhost:4000");
});
