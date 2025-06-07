// UI Components
import { UserAvatar } from "~@/components/user-avatar";
import { buttonVariants } from "~@/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~@/ui/dropdown-menu";
import { Muted } from "~@/ui/typography";

// Icons
import {
  LogOutIcon,
  PlusIcon,
  Settings2Icon,
  SettingsIcon,
  ShieldIcon,
  UserIcon,
} from "lucide-react";

// Utils & Hooks
import { useCallback, type ComponentPropsWithRef } from "react";
import { cn } from "~@/lib/cn";

// Services & State
import { authClient } from "~@/lib/auth-client";

// Types
interface UserAvatarProps extends ComponentPropsWithRef<typeof UserAvatar> {}

// Component: ProfileDisplay - Shows user avatar and info
export function ProfileDisplay({
  className,
  user,
  ...props
}: ComponentPropsWithRef<"div"> & UserAvatarProps) {
  return (
    <div
      className={cn("flex items-center justify-start gap-4", className)}
      {...props}
    >
      <UserAvatar
        className="size-10"
        user={user}
      />

      <div className="flex w-fit flex-col items-start justify-center">
        <span className="font-bold">{user?.name}</span>
        <Muted>{user?.email}</Muted>
      </div>
    </div>
  );
}

// Main Component: ProfileDropdown
export function ProfileDropdown({ user, ...props }: UserAvatarProps) {
  const handleSignOut = useCallback(() => {
    authClient.signOut().then((_res) => {
      location.reload();
    });
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "rounded-full",
        )}
      >
        <UserAvatar
          user={user}
          {...props}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="mt-2 min-w-48 space-y-2"
      >
        {/* User Profile Section */}
        <DropdownMenuGroup>
          <DropdownMenuItem asChild={true}>
            <a href="/profile">
              <UserIcon />
              <span>Profile</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel className="sr-only">Settings</DropdownMenuLabel>
          <DropdownMenuItem asChild={true}>
            <a href="/settings">
              <SettingsIcon />
              <span>General</span>
            </a>
          </DropdownMenuItem>

          <DropdownMenuItem asChild={true}>
            <a href="/settings/preferences">
              <Settings2Icon />
              <span>Preferences</span>
            </a>
          </DropdownMenuItem>

          <DropdownMenuItem asChild={true}>
            <a href="/settings/account">
              <ShieldIcon />
              <span>Account</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup className="mt-2">
          <DropdownMenuItem>
            <PlusIcon />
            <span>Add account</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="font-bold"
            onClick={handleSignOut}
            variant="destructive"
          >
            <LogOutIcon />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
