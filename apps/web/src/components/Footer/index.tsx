import React from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center p-6 bg-primary-900 text-gray-100">
      <p className="mb-2 text-sm">
        Developed with 💛 by{" "}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 transition-colors"
        >
          Me
        </a>
      </p>
    </footer>
  );
};
