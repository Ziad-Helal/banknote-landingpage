import { QueryClient } from "@tanstack/react-query";

export const store = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchOnReconnect: false, notifyOnChangeProps: "all", staleTime: Infinity, gcTime: Infinity, retry: false },
    mutations: { retry: false },
  },
});
