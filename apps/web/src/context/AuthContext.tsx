/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { createContext, useState, useEffect, useContext } from "react";
import { DELETE, GET, POST } from "../libs/axios/handlers";
import { redirect } from "react-router-dom";

interface AuthContextProps {
  isAuthenticated: boolean;
  logIn: (data: { email: string; password: string }) => Promise<void>;
  logOut: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logIn = async (data: {
    email: string;
    password: string;
  }): Promise<void> => {
    try {
      await POST({
        authenticated: true,
        path: "/api/login",
        body: { username: data.email, password: data.password },
        headers: { "Content-Type": "application/json" },
      });
      setIsAuthenticated(true);
      redirect("/home");
    } catch (error) {
      console.error("Login failed:", error);
      setIsAuthenticated(false);
    }
  };

  // Function to log out the user
  const logOut = async (): Promise<void> => {
    await DELETE({
      authenticated: true,
      path: "/api/logout",
    });
    setIsAuthenticated(false);
  };

  // Function to check if the user is authenticated (called on initial load)
  const checkAuth = async (): Promise<void> => {
    try {
      await GET({
        path: "/api/check-auth",
        authenticated: true,
      });
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    }
  };

  // Check authentication on initial load
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, logIn, logOut, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the auth context
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
