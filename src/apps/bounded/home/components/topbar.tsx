import { cn } from "@/core/lib/cn";
import { Separator } from "@/core/ui/separator";
import type { ComponentPropsWithRef } from "react";

export function Topbar({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"div">) {
  return (
    <header
      className={cn(
        "flex w-full flex-row items-center justify-between py-4",
        className,
      )}
      data-group="topbar-wrapper"
      {...props}
    >
      {children}
    </header>
  );
}

export function TopbarActions({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center gap-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function TopbarSeparator({
  className,
  ...props
}: ComponentPropsWithRef<typeof Separator>) {
  return (
    <Separator
      className={cn("data-[orientation=vertical]:h-6", className)}
      orientation="vertical"
      {...props}
    />
  );
}
