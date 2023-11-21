import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";

// Interface para tipar as props do AuthGuard
interface AuthGuardProps {
  isPrivate: boolean;
}

// Verifica se o usuário está logado e se ele tem permissão para acessar rotas privadas.

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
