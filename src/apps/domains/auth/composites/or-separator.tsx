import type { ComponentPropsWithRef } from "react";
import { cn } from "~@/lib/cn";
import { Separator } from "~@/ui/separator";
import { Muted } from "~@/ui/typography";

export function OrSeparator({
  className,
  ...props
}: ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-[1fr_auto_1fr] grid-rows-1 items-center justify-center gap-4",
        className,
      )}
      {...props}
    >
      <Separator orientation="horizontal" />
      <Muted className="font-bold">OR</Muted>
      <Separator orientation="horizontal" />
    </div>
  );
}
