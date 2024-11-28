import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardSidebar } from "./navigations/DashboardSidebar";

export const DashboardLayout: React.FC = () => {
  return (
    <div className="h-screen w-screen relative">
      <DashboardSidebar />

      <div className="h-full ml-[240px]" style={{ width: "calc(100% - 240px)" }}>
        <Outlet />
      </div>
    </div>
  );
};
