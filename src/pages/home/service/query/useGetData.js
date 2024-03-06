import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetData = () => {
  return useQuery({
    queryKey: ["categorys"],
    queryFn: () =>
      request
        .get("/category")
        .then((res) => res.data)
        .catch((error) => console.log(error)),
  });
};
