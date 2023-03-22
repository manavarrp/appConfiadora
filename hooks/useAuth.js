import { signIn } from "next-auth/react";
import { useCallback } from "react";

const useAuth = () => {
  const auth = useCallback((payload) => {
    return signIn("credentials", {
      redirect: false,
      ...payload,
    });
  }, []);
  return auth;
};

export default useAuth;
