import { BrandIcon } from "@/core/icons/brand";
import { cn } from "@/core/lib/cn";
import { buttonVariants } from "@/core/ui/button";
import type { ComponentPropsWithRef } from "react";

export function Logo({ className, ...props }: ComponentPropsWithRef<"a">) {
  return (
    <a
      className={cn(
        buttonVariants({ size: "icon", variant: "ghost" }),
        "size-fit [&_svg:not([class*='size-'])]:size-12",
        className,
      )}
      href="/"
      {...props}
    >
      <BrandIcon />
      <span className="sr-only"> Logo </span>
    </a>
  );
}
