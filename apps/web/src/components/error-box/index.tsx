/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import React from "react";
import {
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes,
} from "react-icons/fa";
import ProgressBar from "../progress-bar";

type AvailableTypes = "information" | "error" | "success";

type Props = {
  type: AvailableTypes;
  text: string;
  iconSize?: string;
  onClose: () => void;
  redirectTo?: { time: number; fn: Function };
};

const pallete: Record<AvailableTypes, any> = {
  information: {
    bg: "bg-[#EBF8FF]",
    border: "border-[#3182CE]",
    text: "text-[#2C5282]",
    icon: FaInfoCircle,
    iconColor: "text-[#3182CE]",
  },
  error: {
    bg: "bg-[#FFF5F5]",
    border: "border-[#E53E3E]",
    text: "text-[#742A2A]",
    icon: FaExclamationTriangle,
    iconColor: "text-[#E53E3E]",
  },
  success: {
    bg: "bg-[#F0FFF4]",
    border: "border-[#38A169]",
    text: "text-[#22543D]",
    icon: FaCheckCircle,
    iconColor: "text-[#38A169]",
  },
};

export const FeedbackBox = ({
  text,
  type,
  onClose,
  redirectTo,
  iconSize = "text-md",
}: Props): JSX.Element => {
  const { bg, border, text: textColor, icon: Icon, iconColor } = pallete[type];

  return (
    <Transition show={true} appear={true}>
      <div
        role="alert"
        className={clsx(
          "min-w-full border p-4 relative flex flex-col mt-2 rounded-md shadow-md",
          "transition-all duration-300 ease-in-out",
          `${bg} ${border} ${textColor}`,
          "data-[closed]:opacity-0",
          "data-[enter]:duration-500 data-[enter]:data-[closed]:translate-x-14",
          "data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-14",
        )}
      >
        <div className="flex items-center gap-3 justify-start">
          <Icon className={clsx(iconSize, iconColor)} />
          <span className="font-semibold text-sm md:text-[14px]">{text}</span>
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={onClose}
            aria-label="Close"
          >
            <FaTimes className="text-xs" />
          </button>
        </div>
        {redirectTo && (
          <ProgressBar
            duration={redirectTo.time}
            speed={70}
            onComplete={() => redirectTo.fn()}
          />
        )}
      </div>
    </Transition>
  );
};
