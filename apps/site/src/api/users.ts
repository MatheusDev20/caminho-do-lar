/* eslint-disable @typescript-eslint/no-explicit-any */
 
import type { RegisterNewUser } from "../@types";
import { GET, POST } from "../lib/axios/handlers";
import type { LoginData } from "@/@types/LoginData";

export const logIn = async (authData: LoginData): Promise<any> => {
  const res = await POST({
    authenticated: true,
    path: "/api/login",
    body: { username: authData.email, password: authData.password },
    headers: { "Content-Type": "application/json" },
  });

  const { body } = res;
  return body;
};

export const registerUser = async (data: RegisterNewUser): Promise<any> => {
  const res = await POST({
    authenticated: false,
    path: "/api/signup",
    body: data,
    headers: { "Content-Type": "application/json" },
  });

  const { body } = res;
  return body;
};

export const getUserProfile = async (): Promise<any> => {
  const res = await GET({
    authenticated: true,
    path: "/api/getProfile",
    headers: { "Content-Type": "application/json" },
  });

  const { body } = res;
  return body;
};
