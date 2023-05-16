import React from "react";
import { Outlet } from "react-router-dom";
import ScrollDiv from "../uiComponents/ScrollDiv";
import Sidebar from "./Sidebar/Sidebar";

export default function PageContainer() {
  return (
    <div className="overflow-auto h-screen md:flex">
      <div className="w-full h-fit md:w-[15%]">
        <Sidebar />
      </div>
      <ScrollDiv className="w-full h-full overflow-auto bg-black flex">
        <Outlet />
      </ScrollDiv>
    </div>
  );
}
