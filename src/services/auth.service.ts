import { useApi } from "@/hooks";
import { useAuthStore } from "@/stores";
import type { Credentials } from "@/types/auth";

export const useAuthService = () => {
  const { httpClient } = useApi();
  const { SET_USER, SET_TOKEN, CLEAR_AUTH } = useAuthStore();

  const authenticateCredentials = async (credentials: Credentials, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    return await httpClient
      .post("/auth/login", credentials)
      .then((response) => {
        const { user, token } = response.data;
        SET_USER(user);
        SET_TOKEN(token);

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        return error;
      });
  };

  const unauthenticateCredentials = () => {
    CLEAR_AUTH();
    window.location.href = "/auth/signin";
  };

  return {
    authenticateCredentials,
    unauthenticateCredentials,
  };
};
