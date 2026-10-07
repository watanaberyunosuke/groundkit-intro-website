import { ImageResponse } from "next/og";

import { SITE } from "@/data/site";

export const alt = `${SITE.name}: ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#1C1712";
const ORANGE = "#F2771F";

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
          background: ORANGE,
          color: INK,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="96" height="96" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="14" fill={INK} />
            <circle cx="27" cy="31" r="12" fill="none" stroke={ORANGE} strokeWidth="5" />
            <circle cx="27" cy="31" r="3.5" fill={ORANGE} />
            <path d="M37.5 45.5 L46.5 33 L53 33 L53 45.5 Z" fill={ORANGE} />
            <rect x="10" y="45.5" width="44" height="4" rx="2" fill={ORANGE} />
          </svg>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>{SITE.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Everything the ramp needs to know, in one glance.
          </div>
          <div style={{ fontSize: 30, opacity: 0.8 }}>
            Ramp status · Arrivals and departures · Turnarounds · Shift wellbeing
          </div>
        </div>
      </div>
    ),
    size
  );
}
