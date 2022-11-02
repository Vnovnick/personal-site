import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

export default function PageContainer() {
  return (
    <div className="flex h-screen">
      <div className="w-[17%]">
        <Sidebar />
      </div>
      <div className="w-full bg-black flex">
        <Outlet />
      </div>
    </div>
  );
}
