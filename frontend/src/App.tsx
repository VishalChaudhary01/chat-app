import { useRef, useState } from "react";
import { JoinCard } from "./components/join-card";
import { ChatBoard } from "./components/chat-board";

export interface Message {
  username: string;
  message: string;
  timestamp: string;
}

const SOCKET_SERVER = import.meta.env.VITE_WEB_SOCKET_SERVER;

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [connected, setConnected] = useState(false);

  const socketRef = useRef<WebSocket | null>(null);

  const handleJoin = () => {
    if (!username.trim()) return;

    socketRef.current = new WebSocket(SOCKET_SERVER);

    socketRef.current.onopen = () => {
      setConnected(true);
      socketRef.current?.send(JSON.stringify({ type: "JOIN", username }));
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "HISTORY") {
        setMessages(data.messages);
      } else if (data.type === "NEW_MESSAGE") {
        setMessages((prev) => [...prev, data]);
      }
    };
  };

  const sendMessage = () => {
    if (message.trim() && socketRef.current) {
      socketRef.current.send(JSON.stringify({ type: "MESSAGE", message }));
      setMessage("");
    }
  };

  return (
    <div className='flex items-start justify-center min-h-screen max-w-7xl mx-auto py-8'>
      {!connected ? (
        <JoinCard
          username={username}
          setUsername={setUsername}
          handleJoin={handleJoin}
        />
      ) : (
        <ChatBoard
          message={message}
          setMessage={setMessage}
          messages={messages}
          sendMessage={sendMessage}
        />
      )}
    </div>
  );
}

export default App;
