import { QueryClient } from "@tanstack/react-query";

export const clients = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});


