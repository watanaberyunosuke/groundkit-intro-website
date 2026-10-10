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
      intro="GroundKit accounts are optional, and the apps have no advertising or tracking. This page explains what the apps read, where it is kept and what leaves your device."
      updated="10 October 2026"
    >
      <h2>Summary</h2>
      <ul>
        <li>An account is optional. Without one, the apps and the dashboard do not know who you are. With one, GroundKit keeps your email address, an optional name and your synced settings, and you can delete them at any time.</li>
        <li>Health data stays on your device (Android) or on your device and your own iCloud (iPhone and iPad). It is never sent to GroundKit.</li>
        <li>Your location is used only while a map is on screen, only after you allow it, and is never stored or sent.</li>
        <li>The apps contain no analytics, advertising or crash-reporting libraries.</li>
      </ul>

      <h2>Accounts</h2>
      <p>
        You can use the apps and the dashboard without an account. An account only syncs your settings between
        GroundKit on iPhone, Android and the web.
      </p>
      <ul>
        <li>
          <strong>What is kept:</strong> your email address, the name you give (optional), how you sign in (email and
          password, or Google) and these settings: home airport, theme or appearance, keep screen on,
          glove mode, wind limits, and the dashboard&apos;s layout and home clock.
        </li>
        <li>
          <strong>What is not:</strong> health data, your location, your age, turnarounds, shifts and handover notes.
          They stay on your device (and your own iCloud on iPhone and iPad) as described below.
        </li>
        <li>
          <strong>Signing in with Google:</strong> Google tells GroundKit your email address and, if you allow it, your
          name.
        </li>
        <li>
          <strong>Where it is kept:</strong> with Supabase, the hosted database and sign-in service GroundKit uses.
          Passwords are stored as hashes, not as text. On your device, the sign-in session is kept in the iOS Keychain
          or encrypted with an Android Keystore key, and is not included in backups.
        </li>
        <li>
          <strong>Deleting it:</strong> in either app, open Settings, then your account, then Delete account; on the
          dashboard, open your account, then Delete account. This removes your account, name and synced settings straight away. Settings already on your
          devices stay there.
        </li>
      </ul>
      <p>GroundKit does not sell account data, use it for advertising or share it with anyone else.</p>

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
        <li>Supabase, only if you sign in, to sign you in and sync your settings.</li>
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
