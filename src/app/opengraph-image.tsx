import { ImageResponse } from "next/og";

import { SITE } from "@/data/site";

export const alt = `${SITE.name}: ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const WHITE = "#FFFFFF";
const NAVY = "#0B3D91";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: `linear-gradient(135deg, #1659B8, ${NAVY} 70%)`,
          color: WHITE,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="96" height="96" viewBox="0 0 64 64">
            <defs>
              <linearGradient id="gk" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#38BDF8" />
                <stop offset="0.45" stopColor="#1D6FD0" />
                <stop offset="1" stopColor={NAVY} />
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="14" fill="url(#gk)" stroke={WHITE} strokeOpacity={0.35} strokeWidth="1.5" />
            <circle cx="27" cy="31" r="12" fill="none" stroke={WHITE} strokeWidth="5" />
            <circle cx="27" cy="31" r="3.5" fill={WHITE} />
            <path d="M37.5 45.5 L46.5 33 L53 33 L53 45.5 Z" fill={WHITE} />
            <rect x="10" y="45.5" width="44" height="4" rx="2" fill={WHITE} />
          </svg>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>{SITE.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Everything the ramp needs to know, in one glance.
          </div>
          <div style={{ fontSize: 30, opacity: 0.85 }}>
            Ramp status · Arrivals and departures · Turnarounds · Shift wellbeing
          </div>
        </div>
      </div>
    ),
    size
  );
}
