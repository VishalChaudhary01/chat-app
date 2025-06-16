import type { Message } from "../App";

interface ChatBoardProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  messages: Message[];
  sendMessage: () => void;
}

export const ChatBoard = ({
  messages,
  message,
  setMessage,
  sendMessage,
}: ChatBoardProps) => {
  return (
    <div className='w-full max-w-md md:max-w-2xl bg-purple-50 p-4 rounded-xl shadow-lg space-y-4'>
      <div className='h-96 overflow-y-auto border border-purple-200 rounded-lg p-4 space-y-4 bg-white'>
        {messages &&
          messages.map((msg, idx) => (
            <div key={idx} className='flex items-start gap-3'>
              <div className='w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold'>
                {msg.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className='text-sm text-gray-800 font-semibold'>
                  {msg.username}
                </div>
                <div className='text-gray-700'>{msg.message}</div>
                <div className='text-xs text-gray-400 mt-1'>
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className='flex gap-2'>
        <input
          className='flex-1 px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-400'
          placeholder='Type a message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className='bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-medium transition-all'
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};
