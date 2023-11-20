import React from "react";
import { Outlet } from "react-router-dom";
import ScrollDiv from "../uiComponents/ScrollDiv";
import NavigationBar from "./Navigation/NavigationBar";

export default function PageContainer() {
  return (
    <div className="overflow-auto grow h-screen flex flex-col">
      <div className="w-full">
        <NavigationBar />
      </div>
      <ScrollDiv className="grow overflow-auto bg-black">
        <Outlet />
      </ScrollDiv>
    </div>
  );
}
