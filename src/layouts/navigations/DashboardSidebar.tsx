import React from "react";
import { Link } from "react-router-dom";
import { useAuthService } from "@/services";
import { ASSETS, ADMIN_SIDEBAR } from "@/constants";
import type { AdminSidebarItem } from "@@types/utils";

export const DashboardSidebar: React.FC = () => {
  const { unauthenticateCredentials } = useAuthService();

  const SidebarLinks: React.FC = () => {
    return ADMIN_SIDEBAR.map((item: AdminSidebarItem) => {
      return (
        <Link to={item.url} className="flex flex-row items-center gap-x-4 text-sm text-white rounded-lg hover:bg-secondary p-2">
          {item.icon}
          <span className="mt-1">{item.label}</span>
        </Link>
      );
    });
  };

  const handleLogout = () => {
    unauthenticateCredentials();
  };

  return (
    <div className="h-full w-[240px] flex flex-col justify-between bg-primary fixed left-0 top-0">
      <div className="flex flex-col gap-y-3 p-5">
        <img src={ASSETS.KATIG_LOGO} alt="katig-logo.png" className="my-5" />
        <h1 className="text-3xl text-white text-center font-lora mb-5">KATIG</h1>
        <SidebarLinks />
      </div>

      <button className="h-[40px] w-full text-xs text-white bg-red-500" onClick={handleLogout}>
        LOG OUT
      </button>
    </div>
  );
};
