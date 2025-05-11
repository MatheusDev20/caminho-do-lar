/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { type InputHTMLAttributes } from "react";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  addonIcon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: "sm" | "md" | "lg";
  custom?: string;
  validateFn: (value: any) => boolean;
  validationMessage?: string;
};

export const Input = ({
  variant,
  label,
  custom,
  addonIcon,
  iconPosition = "left",
  validationMessage,
  validateFn = () => true,
  ...rest
}: Props) => {
  const isInvalid = rest.value && !validateFn(rest.value);

  return (
    <div
      className={clsx(
        "flex flex-col gap-2",
        custom
          ? `w-[${custom}]`
          : {
              "w-1/3": variant === "sm",
              "w-2/3": variant === "md",
              "w-full": variant === "lg",
            },
      )}
    >
      <label htmlFor={rest.name} className="text-sm font-bold text-primary">
        {label}
      </label>

      <div
        className={clsx(
          "flex items-center border rounded-lg p-2 transition-shadow duration-300",
          isInvalid
            ? "border-red-500 ring-2 ring-red-500"
            : "border-gray-300 focus-within:ring-2 focus-within:ring-primary-700",
          "shadow-sm focus-within:shadow-md",
        )}
      >
        {/* Addon icon on the left */}
        {addonIcon && iconPosition === "left" && (
          <div
            className="px-2 flex items-center justify-center"
            aria-hidden="true"
          >
            {React.cloneElement(addonIcon as any, {
              className: "w-5 h-5 text-gray-500",
            })}
          </div>
        )}

        {/* Input field */}
        <input
          {...rest}
          id={rest.name}
          className="p-2 flex-1 focus:outline-none border-none text-gray-700 placeholder-gray-400 rounded-lg"
        />

        {/* Addon icon on the right */}
        {addonIcon && iconPosition === "right" && (
          <div
            className="px-2 flex items-center justify-center"
            aria-hidden="true"
          >
            {React.cloneElement(addonIcon as any, {
              className: "w-5 h-5 text-gray-500",
            })}
          </div>
        )}
      </div>

      {/* Real-time validation */}
      <div
        className={clsx(
          "text-red-500 text-xs pl-2 mt-1 transition-opacity duration-300",
          isInvalid ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-7 4a1 1 0 112 0 1 1 0 01-2 0zM9 7a1 1 0 000 2h2a1 1 0 100-2H9z"
              clipRule="evenodd"
            />
          </svg> */}
        <span>{validationMessage}</span>
      </div>
    </div>
  );
};
