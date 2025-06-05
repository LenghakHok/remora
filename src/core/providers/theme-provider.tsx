import { observer, useObserveEffect } from "@legendapp/state/react";
import type { PropsWithChildren } from "react";
import { resolvedTheme$, theme$ } from "~@/context/theme-store";

export const ThemeProvider = observer(({ children }: PropsWithChildren) => {
  useObserveEffect(() => {
    document.documentElement.classList[
      resolvedTheme$.get() === "dark" ? "add" : "remove"
    ]("dark");
  });

  useObserveEffect(() => {
    localStorage.setItem("theme", theme$.get());
  });

  return children;
});
