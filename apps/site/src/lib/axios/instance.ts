/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type AxiosInstance, type AxiosError } from "axios";

// const unauthorizedMessages = [
//   "JsonWebTokenError",
//   "Token Signature Verification Failed",
//   "EXPIRED ACCESS TOKEN",
// ];

export type HttpResponse = {
  response: any;
  timestamp: string;
  path: string;
};

const getAxiosInstace = (): AxiosInstance => {
  const url: string = import.meta.env.DEV
    ? import.meta.env.VITE_URL_DEV
    : import.meta.env.VITE_URL_PROD;
  return axios.create({
    baseURL: url,
    timeout: 5000,
  });
};

export const axiosInstance = getAxiosInstace();

export const extractApiError = (
  error: AxiosError<any, any>,
  defaultMessage = "Erro ao processar a requisição. Tente novamente mais tarde ou entre em contato com o suporte.",
): string => {
  const { response } = error;
  const message = response?.data.response.message;
  return message ?? defaultMessage;
};
