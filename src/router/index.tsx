import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { Login } from "../view/pages/login";
import { Register } from "../view/pages/register";
import { Dashboard } from "../view/pages/dashboard";
import { AdmLayout } from "../view/layouts/admLayout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas publicas */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* Rota Privada e com layout fixo */}
        <Route element={<AuthGuard isPrivate />}>
          <Route element={<AdmLayout />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
