import type { ComponentPropsWithRef } from "react";
import { BrandIconDark, BrandIconLight } from "~@/icons/brand";
import { cn } from "~@/lib/cn";
import { buttonVariants } from "~@/ui/button";

export function Logo({ className, ...props }: ComponentPropsWithRef<"a">) {
  return (
    <a
      className={cn(
        buttonVariants({ size: "icon", variant: "ghost" }),
        "size-fit rounded-xl hover:bg-transparent [&_svg:not([class*='size-'])]:size-12",
        className,
      )}
      href="/"
      {...props}
    >
      <BrandIconLight className="flex dark:hidden" />
      <BrandIconDark className="hidden dark:flex" />
      <span className="sr-only"> Logo </span>
    </a>
  );
}
