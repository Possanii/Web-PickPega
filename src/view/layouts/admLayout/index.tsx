import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function AdmLayout() {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="flex-wrap flex-col h-full w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
