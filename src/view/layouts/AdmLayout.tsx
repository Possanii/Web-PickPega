import { Outlet } from "react-router-dom";

export function AdmLayout() {
  return (
    <>
      <h1>Default Layout</h1>
      <Outlet />
    </>
  );
}
