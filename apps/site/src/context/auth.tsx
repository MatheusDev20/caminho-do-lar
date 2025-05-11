/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
 
import React, { createContext, useState, useEffect, useContext } from "react";
import { DELETE, GET, POST } from "../lib/axios/handlers";
import type { AuthResponse } from "../@types";
import { timeout } from "@/utils/utils";

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
      await timeout(1500);
      const { body } = await POST<AuthResponse>({
        authenticated: true,
        path: "/api/login",
        body: { username: data.email, password: data.password },
        headers: { "Content-Type": "application/json" },
      });
      setIsAuthenticated(true);
      setUser(body.user);
    } catch (error) {
      console.error("Login failed:", error);
      setIsAuthenticated(false);
    }
  };

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
    } catch (err: any) {
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
