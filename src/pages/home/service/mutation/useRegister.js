import React from "react";
import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data) =>
      request.post("/register", data).then((res) => res.data),
  });
};
