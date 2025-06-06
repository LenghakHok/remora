import {
  HeadphonesIcon,
  HomeIcon,
  InboxIcon,
  PieChartIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import type { JSX } from "react";

interface NavItem {
  title: string;
  icon: JSX.Element;
  href: string;
}

export const navs: {
  label: string;
  navs: (NavItem & {
    subs?: NavItem[];
  })[];
}[] = [
  {
    label: "General" as const,
    navs: [
      {
        title: "Home",
        icon: <HomeIcon />,
        href: "/home",
      },
      {
        title: "Dashboard",
        icon: <PieChartIcon />,
        href: "/dashboard",
      },
      {
        title: "Inbox",
        icon: <InboxIcon />,
        href: "/inbox",
      },
      {
        title: "Search",
        icon: <SearchIcon />,
        href: "/search",
      },
    ],
  },

  {
    label: "Integrations" as const,
    navs: [
      {
        title: "Add New",
        icon: <PlusIcon />,
        href: "/integrations",
      },
    ],
  },

  {
    label: "Settings" as const,
    navs: [
      {
        title: "Settings",
        icon: <SettingsIcon />,
        href: "/settings",
      },
      {
        title: "Help & Support",
        icon: <HeadphonesIcon />,
        href: "/security",
      },
    ],
  },
];
