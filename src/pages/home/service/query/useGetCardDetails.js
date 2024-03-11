import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";


export const useGetCardDetails = (datakey, id) => {
  return useQuery({
    queryKey: ["cardDetails", datakey, id],
    queryFn: () => request.get(`/${datakey}/${id}`).then((res) => res.data),
  });
}
