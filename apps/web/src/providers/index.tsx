import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../context/auth";
import { ModalProvider } from "../context/ modal-context";

type ProvidersProps = {
  children: React.ReactNode;
};
export const Providers = ({ children }: ProvidersProps): JSX.Element => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ModalProvider>{children}</ModalProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
