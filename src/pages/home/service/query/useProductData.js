import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useSaleData = () => {
  return useQuery({
    queryKey: ["sale"],
    queryFn: () =>
      request
        .get("/sales")
        .then((res) => res.data)
        .catch((error) => error),
  });
};
