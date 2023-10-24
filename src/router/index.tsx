import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { Login } from "../view/pages/login";
import { Register } from "../view/pages/register";
import { Dashboard } from "../view/pages/dashboard";
import { AdmLayout } from "../view/layouts/admLayout";
import { PageNotFound } from "../components/PageNotFound";
import { MenuItemsPage } from "../view/pages/menu";
import { ProfilePage } from "../view/pages/profile";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas publicas */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<Login />} />W
          <Route path="/register" element={<Register />} />
        </Route>
        {/* Rota Privada e com layout fixo */}
        <Route element={<AuthGuard isPrivate />}>
          <Route element={<AdmLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/menu" element={<MenuItemsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
