import { useIsMobile } from "@/core/hooks/use-mobile";
import { cn } from "@/core/lib/cn";
import { Button } from "@/core/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/core/ui/command";
import { Kbd } from "@/core/ui/kbd";
import { observable } from "@legendapp/state";
import { observer, useObservable } from "@legendapp/state/react";
import { CommandIcon, SearchIcon } from "lucide-react";
import { useEffect, type ComponentPropsWithRef } from "react";

export const command$ = observable(false);

export const HomeCommand = observer(
  ({ className, ...props }: ComponentPropsWithRef<typeof Button>) => {
    const open$ = useObservable(command$);

    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          open$.set((open) => !open);
        }
      };

      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }, [open$]);

    const isMobile = useIsMobile();

    return (
      <>
        <Button
          className={cn(
            isMobile
              ? ""
              : "relative w-full max-w-xs cursor-pointer items-center justify-start gap-4 border-input",
            className,
          )}
          onClick={() => open$.set(true)}
          size={isMobile ? "icon" : "sm"}
          variant={isMobile ? "ghost" : "secondary"}
          {...props}
        >
          <SearchIcon className={cn("text-muted-foreground")} />
          <span className="text-muted-foreground max-md:sr-only">Search</span>
          <Kbd className="absolute right-2 inline-flex items-center gap-1 text-muted-foreground max-md:sr-only">
            <CommandIcon className="size-3!" /> K
          </Kbd>
        </Button>

        <CommandDialog
          onOpenChange={open$.set}
          open={open$.get()}
        >
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
);
