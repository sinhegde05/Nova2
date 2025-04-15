import React from 'react';
import { Code, Mic, Gamepad } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  icon: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, date, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'Code':
        return <Code className="w-6 h-6" />;
      case 'Mic':
        return <Mic className="w-6 h-6" />;
      case 'Gamepad':
        return <Gamepad className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#1A2342] p-6 rounded-lg border border-purple-500 hover:border-pink-500 transition-colors">
      <div className="mb-4 text-purple-400">
        {getIcon()}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="text-sm text-purple-400">{date}</p>
    </div>
  );
};

export default EventCard;