import type { ComponentPropsWithRef } from "react";
import type { authClient } from "~@/lib/auth-client";
import { cn } from "~@/lib/cn";
import { Avatar, AvatarFallback, AvatarImage } from "~@/ui/avatar";

interface Props extends ComponentPropsWithRef<typeof Avatar> {
  user: Partial<typeof authClient.$Infer.Session.user>;
}

export function UserAvatar({ user, className, ...props }: Props) {
  return (
    <Avatar
      className={cn("size-10", className)}
      {...props}
    >
      <AvatarImage
        alt="profile"
        src={user?.image ?? ""}
      />
      <AvatarFallback className="border uppercase">
        {user?.name?.[0]}
      </AvatarFallback>
    </Avatar>
  );
}
