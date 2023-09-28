import { Navigate, Outlet } from "react-router-dom";

// Interface para tipar as props do AuthGuard
interface AuthGuardProps {
  isPrivate: boolean;
}

// Verifica se o usuário está logado e se ele tem permissão para acessar rotas privadas.

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const signedIn = false;

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
