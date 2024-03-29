import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetData = () => {
  return useQuery({
    queryKey: ["categorys"],
    queryFn: () =>
      request
        .get("/products")
        .then((res) => res.data)
  });
};
