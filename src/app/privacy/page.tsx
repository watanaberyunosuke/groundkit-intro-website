import type { Metadata } from "next";

import { ProsePage } from "@/components/prose-page";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What the GroundKit apps and website collect, where it is kept, and what is never sent anywhere.",
};

export default function PrivacyPage() {
  return (
    <ProsePage
      title="Privacy"
      intro="GroundKit has no accounts, no advertising and no tracking in the apps. This page explains what the apps read, where it is kept and what leaves your device."
      updated="8 October 2026"
    >
      <h2>Summary</h2>
      <ul>
        <li>No sign-up and no account. The apps do not know who you are.</li>
        <li>Health data stays on your device (Android) or on your device and your own iCloud (iPhone and iPad). It is never sent to GroundKit.</li>
        <li>Your location is used only while a map is on screen, only after you allow it, and is never stored or sent.</li>
        <li>The apps contain no analytics, advertising or crash-reporting libraries.</li>
      </ul>

      <h2>Health data</h2>
      <p>
        The Shift screen can read activity and heart data so you can see how a shift is going. You choose which types
        to allow, and you can turn access off at any time in the Health app (iPhone) or Health Connect (Android).
      </p>
      <ul>
        <li>
          <strong>iPhone and iPad (HealthKit):</strong> reads steps, distance, active energy, heart rate, water, sleep
          from the 48 hours before a shift and, with an Apple Watch, environmental sound levels. Saves the water you
          log during a shift.
        </li>
        <li>
          <strong>Android (Health Connect):</strong> reads steps, distance, active energy, heart rate, water and sleep
          from the 48 hours before a shift. Saves the water you log during a shift.
        </li>
      </ul>
      <p>
        Health data is used only to show figures and guidance in the app (for example water targets, heat-strain and
        fatigue checks). It is not sent to GroundKit or anyone else, and it is not used for advertising.
      </p>

      <h2>Records you create</h2>
      <p>
        Turnarounds, shifts and handover notes are stored on your device. On iPhone and iPad they sync through your
        own iCloud private database to devices signed in to the same Apple Account; GroundKit cannot read them. On
        Android they are kept in the app&apos;s storage and included in Android&apos;s own device backup.
      </p>

      <h2>Location</h2>
      <p>
        The maps can show where you are and route you to a stand or gate. Location is requested only when you allow it
        from a map, read only while a map is on screen (never in the background), and never stored or sent.
      </p>

      <h2>Network requests</h2>
      <p>To show airport data, the apps make requests to:</p>
      <ul>
        <li>
          The GroundKit data API on Vercel, asking for an airport&apos;s conditions, history and nearby traffic. The
          request contains the airport code, not anything about you.
        </li>
        <li>
          OpenStreetMap&apos;s Overpass servers for airport layouts, which are downloaded once per airport, and Apple
          Maps (iPhone and iPad) or Esri map tiles (Android) for the base map.
        </li>
      </ul>
      <p>
        Like any web server, these services see your device&apos;s IP address when it connects and may keep it briefly
        in their logs under their own privacy policies.
      </p>

      <h2>This website</h2>
      <p>
        This site uses Vercel Web Analytics to count page views. It does not use cookies and does not identify
        individual visitors.
      </p>

      <h2>Children</h2>
      <p>GroundKit is a work tool for airport ground staff and is not directed at children.</p>

      <h2>Changes and contact</h2>
      <p>
        If this policy changes, the date at the top changes with it. Questions can be raised on{" "}
        <a href={SITE.issuesUrl}>GitHub</a>.
      </p>
    </ProsePage>
  );
}
