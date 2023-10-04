import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Router } from "./router";
import { Toaster } from "react-hot-toast";
import { AuthProvide } from "./app/contexts/AuthContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvide>
        <Router />
        <Toaster />
      </AuthProvide>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
