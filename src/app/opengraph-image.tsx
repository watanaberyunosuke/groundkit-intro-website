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
          <svg width="96" height="96" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="22" fill="#0F1F3D" stroke={WHITE} strokeOpacity={0.35} strokeWidth="2" />
            <path d="M50.00 62.18C47.52 62.18 46.28 58.46 46.28 53.50L46.28 27.46L41.32 21.26L41.32 18.78L46.90 20.02L47.52 15.06L50.00 13.82L52.48 15.06L53.10 20.02L58.68 18.78L58.68 21.26L53.72 27.46L53.72 53.50C53.72 58.46 52.48 62.18 50.00 62.18Z" fill="#ffffff" />
            <path d="M53.72 47.30L74.80 33.66L74.80 29.94L53.72 36.14Z" fill="#ffffff" />
            <path d="M46.28 47.30L25.20 33.66L25.20 29.94L46.28 36.14Z" fill="#ffffff" />
            <path d="M64.26 36.76H64.88A1.24 1.24 0 0 1 66.12 38.00V41.72A1.24 1.24 0 0 1 64.88 42.96H64.26A1.24 1.24 0 0 1 63.02 41.72V38.00A1.24 1.24 0 0 1 64.26 36.76Z" fill="#ffffff" />
            <path d="M35.12 36.76H35.74A1.24 1.24 0 0 1 36.98 38.00V41.72A1.24 1.24 0 0 1 35.74 42.96H35.12A1.24 1.24 0 0 1 33.88 41.72V38.00A1.24 1.24 0 0 1 35.12 36.76Z" fill="#ffffff" />
            <path d="M50.00 61.50H50.00A1 1 0 0 1 51.00 62.50V71.00A1 1 0 0 1 50.00 72.00H50.00A1 1 0 0 1 49.00 71.00V62.50A1 1 0 0 1 50.00 61.50Z" fill="#ffffff" />
            <path d="M47.80 65.60H52.20A0.8 0.8 0 0 1 53.00 66.40V66.40A0.8 0.8 0 0 1 52.20 67.20H47.80A0.8 0.8 0 0 1 47.00 66.40V66.40A0.8 0.8 0 0 1 47.80 65.60Z" fill="#ffffff" />
            <path d="M42.60 73.00H43.20A1.2 1.2 0 0 1 44.40 74.20V77.80A1.2 1.2 0 0 1 43.20 79.00H42.60A1.2 1.2 0 0 1 41.40 77.80V74.20A1.2 1.2 0 0 1 42.60 73.00Z" fill="#8796ad" />
            <path d="M56.80 73.00H57.40A1.2 1.2 0 0 1 58.60 74.20V77.80A1.2 1.2 0 0 1 57.40 79.00H56.80A1.2 1.2 0 0 1 55.60 77.80V74.20A1.2 1.2 0 0 1 56.80 73.00Z" fill="#8796ad" />
            <path d="M42.60 85.00H43.20A1.2 1.2 0 0 1 44.40 86.20V89.80A1.2 1.2 0 0 1 43.20 91.00H42.60A1.2 1.2 0 0 1 41.40 89.80V86.20A1.2 1.2 0 0 1 42.60 85.00Z" fill="#8796ad" />
            <path d="M56.80 85.00H57.40A1.2 1.2 0 0 1 58.60 86.20V89.80A1.2 1.2 0 0 1 57.40 91.00H56.80A1.2 1.2 0 0 1 55.60 89.80V86.20A1.2 1.2 0 0 1 56.80 85.00Z" fill="#8796ad" />
            <path d="M45.20 70.50H54.80A2.2 2.2 0 0 1 57.00 72.70V90.30A2.2 2.2 0 0 1 54.80 92.50H45.20A2.2 2.2 0 0 1 43.00 90.30V72.70A2.2 2.2 0 0 1 45.20 70.50Z" fill="#ffffff" />
            <path d="M45.50 71.80H49.50A1.2 1.2 0 0 1 50.70 73.00V77.00A1.2 1.2 0 0 1 49.50 78.20H45.50A1.2 1.2 0 0 1 44.30 77.00V73.00A1.2 1.2 0 0 1 45.50 71.80Z" fill="#0f1f3d" />
            <path d="M45.60 81.00H54.40A0.6 0.6 0 0 1 55.00 81.60V81.70A0.6 0.6 0 0 1 54.40 82.30H45.60A0.6 0.6 0 0 1 45.00 81.70V81.60A0.6 0.6 0 0 1 45.60 81.00Z" fill="#0f1f3d" fillOpacity={0.55} />
            <path d="M45.60 84.00H54.40A0.6 0.6 0 0 1 55.00 84.60V84.70A0.6 0.6 0 0 1 54.40 85.30H45.60A0.6 0.6 0 0 1 45.00 84.70V84.60A0.6 0.6 0 0 1 45.60 84.00Z" fill="#0f1f3d" fillOpacity={0.55} />
            <path d="M45.60 87.00H54.40A0.6 0.6 0 0 1 55.00 87.60V87.70A0.6 0.6 0 0 1 54.40 88.30H45.60A0.6 0.6 0 0 1 45.00 87.70V87.60A0.6 0.6 0 0 1 45.60 87.00Z" fill="#0f1f3d" fillOpacity={0.55} />
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
