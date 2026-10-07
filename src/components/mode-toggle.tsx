"use client";

import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { readonly className?: string }) {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const selectedTheme = mounted ? (theme ?? "system") : "system";
  const activeTheme = mounted && resolvedTheme === "dark" ? "dark" : "light";
  const nextTheme = selectedTheme === "light" ? "dark" : selectedTheme === "dark" ? "system" : "light";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn("size-9", className)}
      onClick={() => setTheme(nextTheme)}
      aria-label={`Theme: ${selectedTheme}. Switch to ${nextTheme} mode`}
    >
      {selectedTheme === "system" ? (
        <LaptopIcon className="size-[1.1rem]" />
      ) : activeTheme === "dark" ? (
        <MoonIcon className="size-[1.1rem]" />
      ) : (
        <SunIcon className="size-[1.1rem]" />
      )}
    </Button>
  );
}
