import React from "react";
import { useForm } from "react-hook-form";

type Credentials = {
  email: string;
  password: string;
};

export const SigninForm: React.FC = () => {
  const { handleSubmit, register, formState } = useForm<Credentials>();

  const handleLogin = handleSubmit(async (formValues) => {
    console.log(formValues);
  });

  return (
    <form onSubmit={handleLogin} className="w-full flex flex-col gap-y-5">
      <input
        type="text"
        placeholder="Email"
        className="h-[40px] w-full text-xs rounded-full border-0 px-4"
        autoFocus
        required
        {...register("email", { required: true })}
      />
      <input
        type="password"
        placeholder="Password"
        className="h-[40px] w-full text-xs rounded-full border-0 px-4"
        required
        {...register("email", { required: true })}
      />
      <button type="submit" className="h-[40px] w-full text-xs text-white bg-secondary shadow-md rounded-full">
        Log In
      </button>
    </form>
  );
};
