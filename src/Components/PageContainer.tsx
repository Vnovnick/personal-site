import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

export default function PageContainer() {
  return (
    <div className="flex h-screen">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-full overflow-auto bg-black flex">
        <Outlet />
      </div>
    </div>
  );
}
