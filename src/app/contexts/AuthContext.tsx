import { createContext, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { usersServices } from "../services/usersServices";
import toast from "react-hot-toast";
import { PageLoader } from "../../components/PageLoader";

interface AuthContextValue {
  signedIn: boolean;
  singin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvide({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN
    );

    return Boolean(storedAccessToken);
  });

  const { isError, isFetching, isSuccess, remove } = useQuery({
    queryKey: ["users", "me"],
    queryFn: async () => await usersServices.getMe(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const singin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    remove();

    setSignedIn(false);
  }, [remove]);

  useEffect(() => {
    if (isError) {
      toast.error("Sua sessão expirou 😭");
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider
      value={{ signedIn: isSuccess && signedIn, singin, signout }}
    >
      <PageLoader isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
