
import React from "react";
import { Trophy, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScoreBoardProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  className?: string;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ 
  score, 
  totalQuestions, 
  correctAnswers, 
  wrongAnswers,
  className 
}) => {
  // Calculate completion percentage
  const completionPercentage = totalQuestions > 0 
    ? Math.round(((correctAnswers + wrongAnswers) / totalQuestions) * 100)
    : 0;

  // Calculate accuracy percentage
  const accuracyPercentage = (correctAnswers + wrongAnswers) > 0 
    ? Math.round((correctAnswers / (correctAnswers + wrongAnswers)) * 100)
    : 0;

  return (
    <div className={cn("bg-white rounded-lg shadow-md p-4", className)}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-finance-blue">Score</h3>
        <div className="flex items-center">
          <Trophy className="h-5 w-5 text-finance-yellow mr-2" />
          <span className="text-xl font-bold">{score}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex flex-col items-center p-2 bg-green-50 rounded-md">
          <div className="flex items-center mb-1">
            <CheckCircle className="h-4 w-4 text-finance-green mr-1" />
            <span className="text-sm font-medium text-finance-green">Correct</span>
          </div>
          <span className="text-lg font-bold text-finance-green">{correctAnswers}</span>
        </div>
        
        <div className="flex flex-col items-center p-2 bg-red-50 rounded-md">
          <div className="flex items-center mb-1">
            <XCircle className="h-4 w-4 text-finance-red mr-1" />
            <span className="text-sm font-medium text-finance-red">Wrong</span>
          </div>
          <span className="text-lg font-bold text-finance-red">{wrongAnswers}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-finance-gray">Completion</span>
            <span className="font-medium">{completionPercentage}%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full">
            <div 
              className="h-full bg-finance-blue rounded-full transition-all duration-300 ease-out"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-finance-gray">Accuracy</span>
            <span className="font-medium">{accuracyPercentage}%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full">
            <div 
              className={cn(
                "h-full rounded-full transition-all duration-300 ease-out",
                accuracyPercentage >= 80 ? "bg-finance-green" : 
                accuracyPercentage >= 50 ? "bg-finance-yellow" : "bg-finance-red"
              )}
              style={{ width: `${accuracyPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
