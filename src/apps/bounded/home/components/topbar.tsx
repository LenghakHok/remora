import { cn } from "@/core/lib/cn";
import type { ComponentPropsWithRef } from "react";

export function Topbar({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"div">) {
  return (
    <header
      className={cn(
        "flex w-full flex-row items-center justify-start p-4 px-2",
        className,
      )}
      data-group="topbar-wrapper"
      {...props}
    >
      {children}
    </header>
  );
}
