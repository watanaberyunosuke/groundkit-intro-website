"use client";

import { useRef } from "react";
import { XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export function IosInstallInstructions() {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
        className="rounded-sm font-medium text-foreground underline underline-offset-4 outline-none hover:text-brand-strong focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        iOS
      </button>
      <dialog
        ref={dialog}
        aria-labelledby="ios-install-title"
        className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-2xl border border-border bg-background p-6 text-foreground shadow-xl backdrop:bg-black/60"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="ios-install-title" className="text-xl font-semibold">Install GroundKit on iOS</h2>
          <form method="dialog">
            <Button type="submit" variant="ghost" size="icon" aria-label="Close installation instructions">
              <XIcon aria-hidden="true" />
            </Button>
          </form>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Add the GroundKit web app (PWA) to your Home Screen on iPhone or iPad.
        </p>
        <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm">
          <li>Open the live dashboard in Safari.</li>
          <li>Tap Share (the square with an upward arrow). You may need to open Safari&apos;s menu to find it.</li>
          <li>Scroll down and tap <strong>Add to Home Screen</strong>.</li>
          <li>If shown, turn on <strong>Open as Web App</strong>, then tap <strong>Add</strong>.</li>
          <li>Launch GroundKit from its new Home Screen icon.</li>
        </ol>
        <Button asChild variant="brand" className="mt-6 w-full">
          <a href={SITE.dashboardUrl}>Open the live dashboard</a>
        </Button>
      </dialog>
    </>
  );
}
