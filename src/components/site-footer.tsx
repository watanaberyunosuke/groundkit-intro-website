import Link from "next/link";

import { LogoMark } from "@/components/logo";
import { SITE } from "@/data/site";

const LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/support", label: "Support" },
  { href: SITE.dashboardUrl, label: "Live dashboard" },
  { href: SITE.repos.ios, label: "iOS source" },
  { href: SITE.repos.android, label: "Android source" },
  { href: SITE.repos.data, label: "Data platform" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-2">
          <div className="flex items-center gap-2 font-semibold">
            <LogoMark className="size-6" />
            GroundKit
          </div>
          <p className="text-sm text-muted-foreground">
            Advisory only. Ramp closures, lightning alerts and wind limits are the airport&apos;s and airline&apos;s
            call; follow local procedures.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 pb-10 text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} {SITE.author}. GroundKit is an independent project and is not affiliated with
        any airport or airline.
      </div>
    </footer>
  );
}
