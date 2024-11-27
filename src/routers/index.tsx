import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { LazyLoadComponent } from "@/components";
import { AuthLayout, DashboardLayout } from "@/layouts";

/**
 * Auth Pages
 */
const SigninPage = LazyLoadComponent(React.lazy(() => import("@/views/auth/SigninPage")));

/**
 * Dashboard Pages
 */
const DashboardHome = LazyLoadComponent(React.lazy(() => import("@/views/dashboard/HomePage")));

export default createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/signin" />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/signin",
        element: SigninPage,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: DashboardHome,
      },
    ],
  },
]);
