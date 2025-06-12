/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

type ProgressBarProps = {
  duration: number;
  onComplete?: () => void;
  speed?: number;
};

const ProgressBar = ({
  duration,
  onComplete,
  speed = 50,
}: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: any;

    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const step = 100 / (duration / speed);
          const nextProgress = prev + step;
          if (nextProgress >= 100) {
            clearInterval(interval);
            onComplete?.();
            return 100;
          }
          return nextProgress;
        });
      }, speed);
    }

    return () => {
      clearInterval(interval);
    };
  }, [duration, onComplete, progress, speed]);

  return (
    <div className="w-full mt-4 px-4">
      <div className="relative h-3 w-full rounded-2xl overflow-hidden">
        <div
          className="h-full rounded-2xl text-xs text-white flex items-center justify-center"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(to right, #38A169 ${progress}%, #4FD1C5 100%)`,
            transition: "width 0.05s linear",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
