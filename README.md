# 💬 MERN Chat App

A real-time chat application built using the **MERN Stack** — MongoDB, Express.js, React.js, and Node.js — with WebSocket support via the `ws` module. Users can join a shared chatroom, send and receive messages in real-time, and view the latest chat history.

---

## ✨ Features

- Real-time bi-directional messaging using WebSockets
- Persistent message storage in MongoDB
- Last 50 messages shown on new user join
- Simple and responsive UI built with React + Tailwind CSS
- Graceful handling of multiple client connections and disconnections

---

## 🏗️ Project Architecture

### Backend (Express.js + WebSocket)
- Node.js server powered by Express
- WebSocket server via the `ws` module
- Handles client connection, disconnection, and message broadcasting
- Chat messages stored in MongoDB with Mongoose

### Frontend (React.js)
- Single-page application (SPA) built with React
- Username prompt and chat input interface
- WebSocket client connection to backend
- Live updates for incoming messages

### Database (MongoDB)
- Stores each chat message with:
  - `username` (String)
  - `message` (String)
  - `timestamp` (Date)

---

## ⚙️ Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/VishalChaudhary01/chat-app.git
cd chat-app
```

### 2. Backend Setup

```bash
cd server
npm install
cp .env.example .env
```

> Change MONGODB_URI, PORT from your's in .env file

```bash
npm run dev
```

> The server runs on http://localhost:4000 and WebSocket server on ws://localhost:4000.

### 3. Frontend Setup

```bash
cd client
npm install
cp .env.example .env
```

> Change VITE_WEB_SOCKET_SERVER from your's in .env file

```bash
npm run dev
```

> The app will be available at http://localhost:5173.

---

## 🌐 Deployment

### Deployed Backend

https://chat-app-0i7h.onrender.com

To connect with WebSocket from frontend,

wss://chat-app-0i7h.onrender.com

### Frontend Deployment
I have deployed frontend separately on vercel and configure the WebSocket URL using the VITE_WEB_SOCKET_SERVER env variable.

---

## 🧠 Assumptions & Design Choices
- ws was used over socket.io to keep the WebSocket handling lightweight and low-level.
- Messages are limited to the last 50 on join to reduce payload and improve performance.
- No user authentication was added to keep the chat app open and simple.
- Connection state and messages are managed in React state using hooks for simplicity.

---

## 🧪 Testing the WebSocket Server
You can test WebSocket endpoints using tools like:

Hoppscotch – Use wss://chat-app-0i7h.onrender.com

Postman (Beta) – Use the WebSocket tab with the same URL

---

## 📫 Contact

**Vishal Chaudhary**  
- [GitHub](https://github.com/VishalChaudhary01)  
- [LinkedIn](https://www.linkedin.com/in/vishal-chaudhary-32462922a)  
- vishalchaudhary8832@gmail.com

---
