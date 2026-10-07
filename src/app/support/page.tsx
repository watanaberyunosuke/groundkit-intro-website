import type { Metadata } from "next";

import { ProsePage } from "@/components/prose-page";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Help with GroundKit: common questions, known limits and how to report a problem.",
};

export default function SupportPage() {
  return (
    <ProsePage
      title="Support"
      intro="Common questions, known limits, and how to report a problem or ask for an airport."
    >
      <h2>Report a problem or request a feature</h2>
      <p>
        Open an issue on <a href={SITE.issuesUrl}>GitHub</a>. Say which app (iPhone, iPad or Android), the airport,
        and what you saw. A screenshot helps.
      </p>

      <h2>Common questions</h2>
      <ul>
        <li>
          <strong>Why does a flight show as late when the airline says it is on time?</strong> Where an airport
          publishes no flight board, GroundKit has no timetable. It compares each flight&apos;s live estimate with its
          usual time over the last 30 days, so a retimed or new service can look late or early until its history
          catches up.
        </li>
        <li>
          <strong>The status says the weather is old.</strong> Airports issue a METAR every 30 or 60 minutes and the
          data is refreshed through the day. When the latest report is old, GroundKit says so rather than hiding it.
        </li>
        <li>
          <strong>Can I change the wind limits?</strong> Yes. Settings has gust and wind limits; set them to your
          airline&apos;s limits for doors, stairs, high-loaders and jet bridges.
        </li>
        <li>
          <strong>Does it work without signal?</strong> Yes. The last data is kept on the device and the app shows how
          old it is.
        </li>
        <li>
          <strong>Why is the Shift screen empty?</strong> Allow Health (iPhone) or Health Connect (Android) access
          from the Shift screen. Noise exposure needs an Apple Watch and is not available on Android.
        </li>
        <li>
          <strong>Can I add my airport?</strong> Ask on GitHub. Each new airport needs a weather, NOTAM and traffic
          source.
        </li>
      </ul>

      <h2>Moving from Ramp Ops</h2>
      <p>
        GroundKit was called Ramp Ops during development. It installs as a new app, so turnarounds, shifts and notes
        saved in Ramp Ops are not carried over. Remove Ramp Ops once you have finished with them.
      </p>

      <h2>Safety</h2>
      <p>
        GroundKit is advisory. Ramp closures, lightning alerts and wind limits are the airport&apos;s and airline&apos;s
        call, and local procedures always take precedence. Wellbeing figures are guidance, not medical advice.
      </p>
    </ProsePage>
  );
}
