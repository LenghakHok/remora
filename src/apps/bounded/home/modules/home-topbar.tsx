import { ThemesToggle } from "@/core/composites/themes-toggle";
import { cn } from "@/core/lib/cn";
import { SidebarTrigger } from "@/core/ui/sidebar";
import { Topbar, TopbarActions } from "@@/bounded/home/components/topbar";
import type { ComponentPropsWithRef } from "react";

export function HomeTopbar({
  className,
  ...props
}: ComponentPropsWithRef<typeof Topbar>) {
  return (
    <Topbar
      className={cn("pr-2", className)}
      {...props}
    >
      <SidebarTrigger className="text-muted-foreground" />
      <TopbarActions>
        <ThemesToggle
          className="text-muted-foreground"
          variant="ghost"
        />
      </TopbarActions>
    </Topbar>
  );
}
