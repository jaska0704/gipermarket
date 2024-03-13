import React from 'react'
import { useForm } from 'react-hook-form';
import { useLogin } from '../../pages/home/service/mutation/useLogin';
import { saveState } from '../../config/storage';
import { useNavigate } from 'react-router-dom';

export const Login = ({closeModal}) => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate()
    const {mutate,isPending} = useLogin();
    const submit = (data) => {
         mutate(data, {
           onSuccess: (data) => {
            if(data){
                saveState("user", data);
                navigate("/");
                closeModal()
            }
           },
         });
    }



  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col mb-3">
        <input
          {...register("email")}
          placeholder="Email"
          className="border border-blue-400 py-2 px-3"
          type="email"
        />
      </div>
      <div className="flex flex-col mb-3">
        <input
          {...register("password")}
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
  );
}
