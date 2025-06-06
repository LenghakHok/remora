import { ChartBarFill } from "@/core/icons/chart-bar-fill";
import { FoldersFill } from "@/core/icons/folders-fill";
import { Home4Fill } from "@/core/icons/home-4-fill";
import { Inbox2Fill } from "@/core/icons/inbox-2-fill";
import { Plugin2Fill } from "@/core/icons/plugin-2-fill";
import { Search3FillIcon } from "@/core/icons/search-3-fill";
import { Settings3Fill } from "@/core/icons/settings-3-fill";
import { ServiceFill } from "@/core/icons/support-fill";
import type { JSX } from "react";

export const navs: {
  label: string;
  navs: {
    title: string;
    icon: JSX.Element;
    href: string;
  }[];
}[] = [
  {
    label: "General" as const,
    navs: [
      {
        title: "Home",
        icon: <Home4Fill />,
        href: "/home",
      },
      {
        title: "Dashboard",
        icon: <ChartBarFill />,
        href: "/dashboard",
      },
      {
        title: "Inbox",
        icon: <Inbox2Fill />,
        href: "/inbox",
      },
      {
        title: "Search",
        icon: <Search3FillIcon />,
        href: "/search",
      },

      {
        title: "Reports",
        icon: <FoldersFill />,
        href: "/reports",
      },
    ],
  },

  {
    label: "Integrations" as const,
    navs: [
      {
        title: "Integrations",
        icon: <Plugin2Fill />,
        href: "/integrations",
      },
    ],
  },

  {
    label: "Settings" as const,
    navs: [
      {
        title: "General",
        icon: <Settings3Fill />,
        href: "/settings",
      },
      {
        title: "Help & Support",
        icon: <ServiceFill />,
        href: "/security",
      },
    ],
  },
];
