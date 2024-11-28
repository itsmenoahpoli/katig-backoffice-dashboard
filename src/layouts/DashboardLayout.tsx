import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ASSETS, ADMIN_SIDEBAR } from "@/constants";
import type { AdminSidebarItem } from "@@types/utils";

const SidebarLinks: React.FC = () => {
  return ADMIN_SIDEBAR.map((item: AdminSidebarItem) => {
    return (
      <Link to={item.url} className="flex flex-row items-center gap-x-4 text-sm text-white">
        {item.icon}
        <span className="mt-1">{item.label}</span>
      </Link>
    );
  });
};

export const DashboardLayout: React.FC = () => {
  return (
    <div className="h-screen w-screen relative">
      <div className="h-full w-[240px] flex flex-col justify-between bg-primary fixed left-0 top-0">
        <img src={ASSETS.KATIG_LOGO} alt="katig-logo.png" className="my-5" />
        <div className="flex flex-col gap-y-3 p-5">
          <SidebarLinks />
        </div>
      </div>
      <div className="h-full ml-[240px]" style={{ width: "calc(100% - 240px)" }}>
        <Outlet />
      </div>
    </div>
  );
};
