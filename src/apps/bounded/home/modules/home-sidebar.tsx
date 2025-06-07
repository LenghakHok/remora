import { navs } from "@/apps/bounded/home/constants/navs";
import { Logo } from "@/core/components/logo";
import { cn } from "@/core/lib/cn";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/core/ui/sidebar";
import { For } from "@/core/utils/for";
import type { ComponentPropsWithRef, CSSProperties } from "react";

interface HomeSidebarProps extends ComponentPropsWithRef<typeof Sidebar> {
  pathname: string;
}

export function HomeSidebar({
  pathname,
  className,
  ...props
}: HomeSidebarProps) {
  return (
    <SidebarProvider
      className="max-w-fit"
      style={
        {
          "--sidebar-width": "16rem",
          "--sidebar-width-icon": "4rem",
        } as CSSProperties
      }
    >
      <Sidebar
        className={cn("group-data-[side=left]:border-r-0", className)}
        collapsible="icon"
        {...props}
      >
        <SidebarHeader className="p-4">
          <Logo className="[&_svg:not([class*='size-'])]:size-8" />
        </SidebarHeader>

        <SidebarContent>
          <For
            each={navs}
            render={(group) => (
              <SidebarGroup
                className="group px-4 last-of-type:mt-auto last-of-type:flex-col-reverse"
                key={JSON.stringify(group)}
              >
                <SidebarGroupLabel
                  className={cn(
                    "text-muted-foreground uppercase tracking-widest",
                    group.label === "Settings" ? "hidden" : "",
                  )}
                >
                  {group.label}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <For
                      each={group.navs}
                      render={(nav) => (
                        <SidebarMenuItem key={JSON.stringify(nav)}>
                          <SidebarMenuButton
                            asChild={true}
                            className="gap-4 px-3"
                            isActive={
                              pathname.startsWith(nav.href) ||
                              pathname === nav.href
                            }
                          >
                            <a
                              className="[&_svg]:text-muted-foreground data-[active=true]:[&_svg]:text-sidebar-accent-foreground"
                              href={nav.href}
                            >
                              {nav.icon}
                              <span>{nav.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )}
                    />
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )}
          />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </SidebarProvider>
  );
}
