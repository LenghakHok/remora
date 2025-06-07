import { observer } from "@legendapp/state/react";
import { MonitorIcon, MoonStarIcon, SunIcon } from "lucide-react";
import type { ComponentPropsWithRef } from "react";
import { theme$ } from "~@/context/theme-store";
import { cn } from "~@/lib/cn";
import { Button } from "~@/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~@/ui/dropdown-menu";

export const ThemesToggle = observer(
  ({ className, ...props }: ComponentPropsWithRef<typeof Button>) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild={true}>
          <Button
            className={cn("relative", className)}
            size="icon"
            variant="outline"
            {...props}
          >
            <SunIcon
              className={cn(
                "dark:-rotate-90 rotate-0 scale-100 transition-all dark:scale-0",
              )}
            />
            <MoonStarIcon
              className={cn(
                "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
              )}
            />

            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="max-w-48"
        >
          <DropdownMenuItem onClick={() => theme$.set("light")}>
            <SunIcon />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => theme$.set("dark")}>
            <MoonStarIcon />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => theme$.set("system")}>
            <MonitorIcon />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
);
