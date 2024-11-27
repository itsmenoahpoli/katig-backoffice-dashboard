import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ADMIN_SIDEBAR } from "@/constants";
import type { AdminSidebarItem } from "@@types/utils";

const SidebarLinks: React.FC = () => {
  return ADMIN_SIDEBAR.map((item: AdminSidebarItem) => {
    return (
      <Link to={item.url}>
        {item.icon}
        {item.label}
      </Link>
    );
  });
};

export const DashboardLayout: React.FC = () => {
  return (
    <div className="h-screen w-screen relative">
      <div className="h-full w-[240px] flex flex-col justify-between bg-primary fixed left-0 top-0">
        <div className="flex flex-col gap-y-3">
          <SidebarLinks />
        </div>
      </div>
      <div className="h-full ml-[240px]" style={{ width: "calc(100% - 240px)" }}>
        <Outlet />
      </div>
    </div>
  );
};
