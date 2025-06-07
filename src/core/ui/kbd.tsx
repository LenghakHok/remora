import type { ComponentPropsWithRef } from "react";
import { cn } from "~@/lib/cn";

export function Kbd({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"kbd">) {
  return (
    <kbd
      className={cn(
        "rounded-sm border border-b-2 bg-card p-1.5 py-0.5 text-xs shadow-xs",
        className,
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
