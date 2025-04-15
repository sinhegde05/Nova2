import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    try {
      const target = new Date(targetDate);
      const now = new Date();
      
      // Ensure we're comparing the same time zone
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds
      };
    } catch (error) {
      console.error('Error calculating time:', error);
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Calculate immediately on mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); // Re-run effect if targetDate changes

  const padNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="w-20 h-20 flex items-center justify-center bg-[#1A2342] rounded-lg border border-purple-500">
            <span className="text-3xl font-bold">{padNumber(value)}</span>
          </div>
          <span className="text-sm mt-2 block capitalize">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;