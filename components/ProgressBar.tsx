import React from "react";

interface ProgressBarProps {
  currentProgress: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentProgress, total}) => {
  const progress = total > 0 ? (currentProgress / total) * 100 : 0; 

  return (
    <div className="w-full">



      <div className="relative w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
