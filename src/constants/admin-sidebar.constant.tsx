import { FiHome, FiFolderPlus, FiAnchor, FiUsers, FiList, FiPhoneCall, FiBookOpen, FiSettings, FiInfo } from "react-icons/fi";
import type { AdminSidebarItem } from "@@types/utils";

const ICON_ATTR = {
  size: 20,
  color: "white",
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
    icon: <FiFolderPlus color={ICON_ATTR.color} size={ICON_ATTR.size} />,
  },
  {
    label: "Boat Registry",
    url: "/dashboard/boat-registry",
    icon: <FiAnchor color={ICON_ATTR.color} size={ICON_ATTR.size} />,
  },
  {
    label: "Users",
    url: "/dashboard/users",
    icon: <FiUsers color={ICON_ATTR.color} size={ICON_ATTR.size} />,
  },
  {
    label: "Bookings",
    url: "/dashboard/bookings",
    icon: <FiList color={ICON_ATTR.color} size={ICON_ATTR.size} />,
  },
  {
    label: "Emergency Handling",
    url: "/dashboard/emergency-handling",
    icon: <FiPhoneCall color={ICON_ATTR.color} size={ICON_ATTR.size} />,
  },
  {
    label: "Reports & Reviews",
    url: "/dashboard/reports-and-reviews",
    icon: <FiBookOpen color={ICON_ATTR.color} size={ICON_ATTR.size} />,
  },
  {
    label: "Trip Monitoring",
    url: "/dashboard/trip monitoring",
    icon: <FiList color={ICON_ATTR.color} size={ICON_ATTR.size} />,
  },
  {
    label: "Notifications",
    url: "/dashboard/notifications",
    icon: <FiList color={ICON_ATTR.color} size={ICON_ATTR.size} />,
  },
  {
    label: "Settings",
    url: "/dashboard/settings",
    icon: <FiSettings color={ICON_ATTR.color} size={ICON_ATTR.size} />,
  },
  {
    label: "About",
    url: "/dashboard/about",
    icon: <FiInfo color={ICON_ATTR.color} size={ICON_ATTR.size} />,
  },
] as const;
