import { useId } from "react";

import { cn } from "@/lib/utils";

/**
 * The GroundKit mark: an aircraft wheel resting against a chock, on the apron. White on a
 * sky-to-navy tile in both themes, the same artwork as the app icons.
 */
export function LogoMark({ className }: { readonly className?: string }) {
  const gradientId = useId();
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("size-8", className)}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38BDF8" />
          <stop offset="0.45" stopColor="#1D6FD0" />
          <stop offset="1" stopColor="#0B3D91" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={`url(#${gradientId})`} />
      <circle cx="27" cy="31" r="12" fill="none" stroke="#FFFFFF" strokeWidth="5" />
      <circle cx="27" cy="31" r="3.5" fill="#FFFFFF" />
      <path d="M37.5 45.5 L46.5 33 L53 33 L53 45.5 Z" fill="#FFFFFF" />
      <rect x="10" y="45.5" width="44" height="4" rx="2" fill="#FFFFFF" />
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
