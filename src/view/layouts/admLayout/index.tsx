import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { useState } from "react";

export function AdmLayout() {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);

  return (
    <div className="h-full w-full">
      <Sidebar setExpand={setSideMenuIsExpand} />
      <div
        className={`h-full flex flex-col p-4 md:px-8 md:pb-8 md:pt-6 bg-gray-100 transition-all duration-300 ease-in-out ${
          sideMenuIsExpand ? "md:ml-72" : "md:ml-20"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
