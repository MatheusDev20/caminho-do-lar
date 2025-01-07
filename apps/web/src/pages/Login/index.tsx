import React from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({
  isOpen,
  onClose,
}: LoginModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-[90%] max-w-md"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded p-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded p-2"
          />
          <button
            type="submit"
            className="bg-primary-700 text-white rounded p-2 hover:bg-primary-800"
          >
            Log In
          </button>
        </form>
        <button
          className="mt-4 text-sm text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
