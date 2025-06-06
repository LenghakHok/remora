import { Logo } from "@/core/components/logo";
import { cn } from "@/core/lib/cn";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/core/ui/sidebar";
import { For } from "@/core/utils/for";
import { navs } from "@@/domains/home/constants/navs";
import type { ComponentPropsWithRef } from "react";

interface HomeSidebarProps extends ComponentPropsWithRef<typeof Sidebar> {
  pathname: string;
}

export function HomeSidebar({
  pathname,
  className,
  ...props
}: HomeSidebarProps) {
  return (
    <SidebarProvider>
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
                className="px-4"
                key={JSON.stringify(group)}
              >
                <SidebarGroupLabel className="text-muted-foreground uppercase tracking-widest">
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
                            className="gap-4"
                          >
                            <a
                              className="[&_svg]:text-muted-foreground"
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
      </Sidebar>
      <SidebarInset />
    </SidebarProvider>
  );
}
