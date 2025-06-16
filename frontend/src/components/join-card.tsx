import React from "react";

interface JoinCardProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  handleJoin: () => void;
}

export const JoinCard = ({
  username,
  setUsername,
  handleJoin,
}: JoinCardProps) => {
  return (
    <div className='bg-purple-50 max-w-md mx-auto mt-20 p-6 rounded-xl shadow-lg space-y-6 border border-purple-200'>
      <h2 className='text-center text-3xl font-semibold text-gray-700'>
        👋 Welcome to Chat App
      </h2>
      <p className='text-center text-sm text-gray-500'>
        Enter your name below to join the chat board and start talking with
        others!
      </p>

      <input
        className='w-full px-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400'
        placeholder='Enter your username'
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
      />

      <button
        className='w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 rounded-md transition-all duration-200'
        onClick={handleJoin}
      >
        Join Chat
      </button>
    </div>
  );
};
