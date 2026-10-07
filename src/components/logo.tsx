import { cn } from "@/lib/utils";

/** The GroundKit mark: an aircraft wheel resting against a chock, on the apron. */
export function LogoMark({ className }: { readonly className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("size-8", className)}>
      <rect width="64" height="64" rx="14" className="fill-brand" />
      <circle cx="27" cy="31" r="12" fill="none" strokeWidth="5" className="stroke-brand-foreground" />
      <circle cx="27" cy="31" r="3.5" className="fill-brand-foreground" />
      <path d="M37.5 45.5 L46.5 33 L53 33 L53 45.5 Z" className="fill-brand-foreground" />
      <rect x="10" y="45.5" width="44" height="4" rx="2" className="fill-brand-foreground" />
    </svg>
  );
}

export function Logo({ className }: { readonly className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-semibold tracking-tight", className)}>
      <LogoMark />
      <span className="text-lg">GroundKit</span>
    </span>
  );
}
