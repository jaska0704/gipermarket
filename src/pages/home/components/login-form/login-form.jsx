import { useForm } from "react-hook-form";
import { useRegister } from "../../service/mutation/useRegister";

export const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending } = useRegister();
  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input {...register("email")} type="email" />
      <input {...register("password")} type="password" />
      <button type="submit">Add</button>
    </form>
  );
};
