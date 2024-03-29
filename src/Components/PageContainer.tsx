import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollDiv from "../uiComponents/ScrollDiv";
import NavigationBar from "./Navigation/NavigationBar";

export default function PageContainer() {
  const location = useLocation();

  return (
    <div className="overflow-auto grow h-screen flex flex-col">
      {location.pathname !== "/" && (
        <div className="w-full">
          <NavigationBar />
        </div>
      )}
      <ScrollDiv className="grow overflow-auto bg-black flex flex-col">
        <Outlet />
      </ScrollDiv>
    </div>
  );
}
