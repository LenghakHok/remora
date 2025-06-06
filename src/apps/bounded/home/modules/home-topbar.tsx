import { SidebarTrigger } from "@/core/ui/sidebar";
import { Topbar } from "@@/bounded/home/components/topbar";
import type { ComponentPropsWithRef } from "react";

export function HomeTopbar(props: ComponentPropsWithRef<typeof Topbar>) {
  return (
    <Topbar {...props}>
      <SidebarTrigger className="text-muted-foreground" />
    </Topbar>
  );
}
