import React from "react";
import clsx from "clsx";

interface Props {
  placeholder: string;
  name: string;
  type: string;
  addonIcon?: any; // Optional addon icon
  iconPosition?: "left" | "right"; // Icon position
  size?: "sm" | "md" | "lg";
  custom?: string; // Accepts a custom percentage
}

export const Input = ({
  size,
  custom,
  addonIcon,
  iconPosition = "left", // Default icon position
  ...rest
}: Props): JSX.Element => {
  console.log("a", addonIcon);
  return (
    <div
      className={clsx(
        "flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-primary-700",
        custom
          ? `w-[${custom}]`
          : {
              "w-[30%]": size === "sm",
              "w-[60%]": size === "md",
              "w-[90%]": size === "lg",
            },
      )}
    >
      {/* Addon icon on the left */}
      {addonIcon && iconPosition === "left" && (
        <div className="px-2 max-w-[15%] flex items-center justify-center">
          {addonIcon}
        </div>
      )}

      {/* Input field */}
      <input
        {...rest}
        className="p-2 flex-1 focus:outline-none rounded-l-none border-none"
      />

      {/* Addon icon on the right */}
      {addonIcon && iconPosition === "right" && (
        <div className="px-3 text-gray-500">{addonIcon}</div>
      )}
    </div>
  );
};
