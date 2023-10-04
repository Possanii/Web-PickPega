import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { useState } from "react";

export function AdmLayout() {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);

  return (
    <div className="flex h-full w-full">
      <Sidebar setExpand={setSideMenuIsExpand} />
      <div
        className={`flex-1 min-h-screen mx-0 bg-slate-100 transition-all duration-300 ease-in-out ${
          sideMenuIsExpand ? "md:ml-72" : "md:ml-20"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
