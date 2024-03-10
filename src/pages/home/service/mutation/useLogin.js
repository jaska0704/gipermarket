import React from "react";
import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data) =>
      request.post("/login", data).then((res) => res.data),
  });
};
