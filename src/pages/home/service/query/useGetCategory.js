import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";


export const useGetCategory = (datakey)=> {
    return useQuery({
        queryKey:["allCategory", datakey],
        queryFn:()=> request.get(`/${datakey}`).then((res)=> res.data)
    });
};