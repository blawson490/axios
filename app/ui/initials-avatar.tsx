import React from 'react';

// Helper function to get initials
const getInitials = (name: string): string => {
  const words = name.split(' ');

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  if (words.length === 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }

  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

// Helper function to get a random color
const getRandomColor = (): string => {
  const colors = [
    'bg-red-500', 'bg-blue-500', 'bg-green-500',
    'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

type InitialsAvatarProps = {
  name: string;
};

const InitialsAvatar: React.FC<InitialsAvatarProps> = ({ name }) => {
  const initials = getInitials(name);
  const backgroundColor = getRandomColor();

  return (
    <div className={`flex items-center w-8 h-8 text-md justify-center rounded-full ${backgroundColor} text-white`}>
      <span className="font-bold">{initials}</span>
    </div>
  );
};

export default InitialsAvatar;