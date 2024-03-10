import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetNout = () => {
  return useQuery({
    queryKey: ["noutbuk"],
    queryFn: () => request.get("/noutbuk").then((res) => res.data),
  });
};
