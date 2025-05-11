/* eslint-disable @typescript-eslint/no-explicit-any */
type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  petPreference: string;
  admin: boolean;
};

export type BasicRequest = {
  path: string;
  authenticated: boolean;
  headers?: any;
  body?: any;
  formData?: FormData;
};

export type BasicResponse<T> = {
  body: T;
};

export type RequestState = {
  loading: boolean;
  error: string;
};

export type RegisterNewUser = {
  name: string;
  email: string;
  password: string;
  petPreference: "Cachorros" | "Gatos" | null;
};

export type AuthResponse = {
  message: string;
  user: User;
};

export type PetPageParams = {
  filters: {
    gender: string;
    page: number;
    specie: string;
    size: string;
  };
};

