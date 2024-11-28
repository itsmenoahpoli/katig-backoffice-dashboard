import React from "react";
import { Spinner } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useAuthService } from "@/services";
import type { Credentials } from "@@types/auth";

export const SigninForm: React.FC = () => {
  const { handleSubmit, register } = useForm<Credentials>();
  const { authenticateCredentials } = useAuthService();

  const [loading, setLoading] = React.useState<boolean>(false);

  const handleLogin = handleSubmit(async (formData) => {
    return await authenticateCredentials(formData, setLoading);
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
      <button type="submit" className="h-[40px] w-full text-xs text-white bg-secondary shadow-md rounded-full" disabled={loading}>
        {loading ? <Spinner /> : "Log In"}
      </button>
    </form>
  );
};
