import { FiHome } from "react-icons/fi";
import type { AdminSidebarItem } from "@@types/utils";

const ICON_ATTR = {
  size: 24,
  color: "black",
};

export const ADMIN_SIDEBAR: AdminSidebarItem[] = [
  {
    label: "Dashboard",
    url: "/dashboard/",
    icon: <FiHome color={ICON_ATTR.color} size={ICON_ATTR.size} />,
  },
  {
    label: "Admin Registry",
    url: "/dashboard/admin-registry",
    icon: undefined,
  },
  {
    label: "Boat Registry",
    url: "/dashboard/boat-registry",
    icon: undefined,
  },
  {
    label: "Users",
    url: "/dashboard/users",
    icon: undefined,
  },
  {
    label: "Bookings",
    url: "/dashboard/bookings",
    icon: undefined,
  },
  {
    label: "Emergency Handling",
    url: "/dashboard/emergency-handling",
    icon: undefined,
  },
  {
    label: "Reports & Reviews",
    url: "/dashboard/reports-and-reviews",
    icon: undefined,
  },
  {
    label: "Boat Registry",
    url: "/dashboard/boat-registry",
    icon: undefined,
  },
  {
    label: "Trip Monitoring",
    url: "/dashboard/trip monitoring",
    icon: undefined,
  },
  {
    label: "Notifications",
    url: "/dashboard/notifications",
    icon: undefined,
  },
  {
    label: "Settings",
    url: "/dashboard/settings",
    icon: undefined,
  },
] as const;
