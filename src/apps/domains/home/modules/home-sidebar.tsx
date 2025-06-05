import { Logo } from "@/core/components/logo";
import { cn } from "@/core/lib/cn";
import { Separator } from "@/core/ui/separator";
import type { ComponentPropsWithRef } from "react";

interface HomeSidebarProps extends ComponentPropsWithRef<"div"> {
  pathname: string;
}

export function HomeSidebar({
  pathname,
  className,
  ...props
}: HomeSidebarProps) {
  return (
    <div
      className={cn("flex h-full w-fit flex-col gap-4 p-4", className)}
      {...props}
    >
      <Logo className="[&_svg:not([class*='size-'])]:size-8" />

      <Separator />
    </div>
  );
}
