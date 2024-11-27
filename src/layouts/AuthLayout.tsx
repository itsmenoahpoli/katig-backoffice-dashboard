import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-primary">
      <Outlet />
    </div>
  );
};
