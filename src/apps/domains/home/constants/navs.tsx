import { ChartBarFill } from "@/core/icons/chart-bar-fill";
import { FoldersFill } from "@/core/icons/folders-fill";
import { Home4Fill } from "@/core/icons/home-4-fill";
import { Inbox2Fill } from "@/core/icons/inbox-2-fill";
import { Message1Fill } from "@/core/icons/message-1-fill";
import { NotificationFill } from "@/core/icons/notification-fill";
import { Plugin2Fill } from "@/core/icons/plugin-2-fill";
import { SafeShield2Fill } from "@/core/icons/safe-shield-2-fill";
import { Search3FillIcon } from "@/core/icons/search-3-fill";
import { Settings3Fill } from "@/core/icons/settings-3-fill";
import { UserSecurityFill } from "@/core/icons/user-security-fill";

export const navs = [
  {
    label: "General",
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
    ],
  },

  {
    label: "Integrations",
    navs: [
      {
        title: "Apps",
        icon: <Plugin2Fill />,
        href: "/apps",
      },
      {
        title: "Agents",
        icon: <Message1Fill />,
        href: "/agent",
      },
      {
        title: "Reports",
        icon: <FoldersFill />,
        href: "/reports",
      },
    ],
  },

  {
    label: "Settings",
    navs: [
      {
        title: "General",
        icon: <Settings3Fill />,
        href: "/settings",
      },
      {
        title: "Security",
        icon: <SafeShield2Fill />,
        href: "/security",
      },
      {
        title: "Account",
        icon: <UserSecurityFill />,
        href: "/account",
      },
      {
        title: "Notifications",
        icon: <NotificationFill />,
        href: "/notifications",
      },
    ],
  },
];
