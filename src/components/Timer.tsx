
import React, { useEffect, useState } from "react";
import { AlertCircle, TimerIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimerProps {
  duration: number; // Duration in seconds
  isRunning: boolean;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, isRunning, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration);
  const [isWarning, setIsWarning] = useState<boolean>(false);

  useEffect(() => {
    // Reset timer when duration changes
    setTimeLeft(duration);
    setIsWarning(false);
  }, [duration]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          // Set warning state when less than 5 seconds left
          if (prev <= 6 && !isWarning) {
            setIsWarning(true);
          }
          // Trigger timeUp when 0 is reached
          if (prev === 1) {
            onTimeUp();
          }
          return prev - 1;
        });
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, onTimeUp, isWarning]);

  // Format time as MM:SS
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Calculate progress percentage
  const progressPercent = (timeLeft / duration) * 100;

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-2">
        {isWarning ? (
          <AlertCircle className="w-5 h-5 mr-2 text-red-500 animate-pulse" />
        ) : (
          <TimerIcon className="w-5 h-5 mr-2 text-finance-blue" />
        )}
        <span 
          className={cn(
            "font-mono text-lg font-bold",
            isWarning ? "text-red-500" : "text-finance-blue"
          )}
        >
          {formatTime(timeLeft)}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div 
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-linear",
            isWarning ? "bg-red-500" : "bg-finance-green"
          )}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;
