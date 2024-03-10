import React from "react";
import { useForm } from "react-hook-form";
import { useRegister } from "../../pages/home/service/mutation/useRegister";
import { saveState } from "../../config/storage";

export const Register = ({ closeModal }) => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending } = useRegister();
  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        if (data) {
          saveState("user", data);
          closeModal();
        }
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col mb-3">
          <input
            {...register("firstname")}
            required="true"
            placeholder="Firstname"
            className="border border-blue-400 py-2 px-3"
            type="text"
          />
        </div>
        <div className="flex flex-col mb-3">
          <input
            {...register("lastname")}
            required="true"
            placeholder="Lastname"
            className="border border-blue-400 py-2 px-3"
            type="text"
          />
        </div>
        <div className="flex flex-col mb-3">
          <input
            {...register("email")}
            required="true"
            placeholder="Email"
            className="border border-blue-400 py-2 px-3"
            type="email"
          />
        </div>
        <div className="flex flex-col mb-3">
          <input
            {...register("password")}
            required="true"
            placeholder="Password"
            className="border border-blue-400 py-2 px-3"
            type="password"
          />
        </div>
        <div className="text-left">
          <button type="submit" className="btn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
