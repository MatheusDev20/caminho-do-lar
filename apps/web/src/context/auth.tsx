/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { createContext, useState, useEffect, useContext } from "react";
import { DELETE, GET, POST } from "../libs/axios/handlers";
import { timeout } from "../utils/utils";
import { AuthResponse } from "../@types";

interface AuthContextProps {
  isAuthenticated: boolean;
  logIn: (data: { email: string; password: string }) => Promise<void>;
  logOut: () => void;
  checkAuth: () => Promise<void>;
  user: any;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const logIn = async (data: {
    email: string;
    password: string;
  }): Promise<void> => {
    try {
      await timeout(2000);
      await POST({
        authenticated: true,
        path: "/api/login",
        body: { username: data.email, password: data.password },
        headers: { "Content-Type": "application/json" },
      });
      setIsAuthenticated(true);
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

  const checkAuth = async (): Promise<void> => {
    try {
      setLoading(true);
      const { body } = await GET<AuthResponse>({
        path: "/api/check-auth",
        authenticated: true,
      });
      setIsAuthenticated(true);
      setUser(body.user);
    } catch (err) {
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, logIn, logOut, checkAuth, user, loading }}
    >
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
