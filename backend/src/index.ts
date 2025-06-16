import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

let count = 0;

wss.on("connection", (socket) => {
  count = count + 1;
  console.log("Connect socket #", count);
});

server.listen(4000, () => {
  console.log("Server started on http://localhost:4000");
});
