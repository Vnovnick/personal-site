import React from "react";
import { Outlet } from "react-router-dom";
import ScrollDiv from "../uiComponents/ScrollDiv";
import Sidebar from "./Sidebar/Sidebar";

export default function PageContainer() {
  return (
    <div className="flex h-screen">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <ScrollDiv className="w-full overflow-auto bg-black flex">
        <Outlet />
      </ScrollDiv>
    </div>
  );
}
