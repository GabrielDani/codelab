"use client";

import { queryClient } from "@/lib/tanstack-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "../ui/sonner";

type ClientProvidersProps = {
  children: React.ReactNode;
};

export const ClientProviders = ({ children }: ClientProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors />
      {children}
    </QueryClientProvider>
  );
};
