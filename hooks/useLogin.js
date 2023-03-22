import { useCallback, useState } from "react";
import globalAxios from "../axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import useAuth from "./useAuth";

const loginService = (payload) => {
  return globalAxios.post("auth/login/", payload);
};

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const auth = useAuth();

  const login = useCallback(
    async (payload) => {
      try {
        setIsLoading(true);
        const { data } = await loginService(payload);
        const { token, isFirstLogin } = data?.data;

        if (token) {
          const response = await auth({ token, isFirstLogin });
          console.log(response);
        } else {
          router.push("/auth/two-factor-auth");
        }

        //sessionStorage.setItem("tokentemporaly", token);
        //router.push(`/auth/two-factor-auth/${token}?f=${isFirstLogin}`);
      } catch (error) {
        console.log(error);
        toast.error("Error al loguear");
      } finally {
        setIsLoading(false);
      }
    },
    [router]
  );

  return { login, isLoading };
};

export default useLogin;
