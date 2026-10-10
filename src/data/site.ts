export const SITE = {
  name: "GroundKit",
  tagline: "The ramp, apron and cargo crew companion",
  description:
    "GroundKit puts ramp weather, arrivals and departures, live traffic, turnaround checklists and shift wellbeing in one app built for working outside. For iPhone, iPad and Android.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://groundkit.harrydatahub.com",
  dashboardUrl: "https://groundkit-dashboard.harrydatahub.com",
  repos: {
    ios: "https://github.com/watanaberyunosuke/groundkit-ios",
    android: "https://github.com/watanaberyunosuke/groundkit-android",
    data: "https://github.com/watanaberyunosuke/motherduck-aviation-data-analysis",
    website: "https://github.com/watanaberyunosuke/groundkit-intro-website",
  },
  issuesUrl: "https://github.com/watanaberyunosuke/groundkit-intro-website/issues",
  author: "Harry Watson",
} as const;

export const NAV = [
  { href: "/#features", label: "Features" },
  { href: "/#airports", label: "Airports" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/support", label: "Support" },
] as const;

export type Platform = "iOS" | "Android";

export const FEATURES: ReadonlyArray<{
  title: string;
  body: string;
  icon: "gauge" | "boards" | "radar" | "checklist" | "map" | "heart";
  platforms: ReadonlyArray<Platform>;
}> = [
  {
    title: "Ramp status at a glance",
    body: "Normal ops, Caution or Warning from the latest METAR, TAF and NOTAMs: thunderstorms and lightning risk, wind and gust limits, ice, heat stress, wind chill, low visibility, runway closures and apron or taxiway notices.",
    icon: "gauge",
    platforms: ["iOS", "Android"],
  },
  {
    title: "Arrivals and departures",
    body: "Inbound aircraft with ETA, minutes to landing and distance, what is on the ground, and what is expected in the next 6 hours, each marked on time, late or very late. Freighters are tagged.",
    icon: "boards",
    platforms: ["iOS", "Android"],
  },
  {
    title: "Live airspace map",
    body: "Aircraft within 500 NM pointing along their track and coloured by delay, the observed arrival and departure paths of the last 3 days, the 50 NM terminal area and the wind.",
    icon: "radar",
    platforms: ["iOS", "Android"],
  },
  {
    title: "Turnaround checklist",
    body: "Chocks, cones, GPU, holds, bags and cargo, fuelling, catering, cleaning, NOTOC, loadsheet and pushback. One tap stamps the time, with bag and ULD counters and a countdown to off-block.",
    icon: "checklist",
    platforms: ["iOS"],
  },
  {
    title: "Airport layout and routes",
    body: "Runways, taxiways, stands, gates, aprons and cargo buildings from OpenStreetMap, with your position. Search for a stand or gate and get a route there along the service roads.",
    icon: "map",
    platforms: ["iOS", "Android"],
  },
  {
    title: "Shift and wellbeing",
    body: "Time on shift and breaks, water against a target that rises with the heat, fatigue checks from your sleep and hours, heat-strain warnings from heart rate, noise exposure on Apple Watch, and handover notes.",
    icon: "heart",
    platforms: ["iOS", "Android"],
  },
];

export const OUTDOOR = [
  {
    title: "Built for gloves",
    body: "Large type and touch targets throughout. Glove mode on iPhone makes them larger still.",
  },
  {
    title: "Not colour alone",
    body: "Every status is a symbol, a word and a colour, so it reads in glare and for colour-blind crew.",
  },
  {
    title: "Hi-vis themes",
    body: "High-contrast light and dark themes, and Sunset mode, which goes dark at the airport's sunset so a night shift needs no fiddling.",
  },
  {
    title: "Works in dead spots",
    body: "The last data is kept on the device, so the app opens with it and says how old it is.",
  },
  {
    title: "Keep screen on",
    body: "For a tablet in a tug, on a belt loader or in the ops room.",
  },
  {
    title: "Your limits",
    body: "Set wind limits to match your airline's door, stairs, high-loader and jet bridge procedures.",
  },
] as const;

export const AIRPORTS = [
  { iata: "SYD", name: "Sydney", country: "Australia" },
  { iata: "MEL", name: "Melbourne", country: "Australia" },
  { iata: "BNE", name: "Brisbane", country: "Australia" },
  { iata: "SIN", name: "Singapore Changi", country: "Singapore" },
  { iata: "HKG", name: "Hong Kong", country: "Hong Kong" },
  { iata: "AMS", name: "Amsterdam Schiphol", country: "Netherlands" },
  { iata: "ANC", name: "Anchorage", country: "United States" },
] as const;

export const PIPELINE = [
  {
    step: "Collect",
    body: "METAR and TAF weather, NOTAMs, and ADS-B positions from OpenSky and adsb.lol, gathered on a schedule.",
  },
  {
    step: "Model",
    body: "Loaded into a MotherDuck warehouse and shaped with dbt, keeping 30 days of history for each airport.",
  },
  {
    step: "Serve",
    body: "A small API on Vercel hands each airport's snapshot and the live traffic around it to the apps, cached at the edge.",
  },
  {
    step: "Predict",
    body: "Where an airport publishes no flight board, each flight's usual time comes from its last 30 days, and delay is the live estimate against it.",
  },
] as const;

export const SCREENS = [
  { src: "/screens/now.jpg", alt: "GroundKit Now screen at Hong Kong: local and UTC clocks, a Caution ramp status banner, the airspace map and wind and temperature tiles", caption: "Now" },
  { src: "/screens/arrivals.jpg", alt: "GroundKit Arrivals board listing inbound flights with times, minutes to landing, origin, distance and on-time or late status", caption: "Arrivals" },
  { src: "/screens/turnaround.jpg", alt: "GroundKit turnaround checklist for a flight, with chocks, cones and GPU stamped and holds open next", caption: "Turnarounds" },
  { src: "/screens/shift.jpg", alt: "GroundKit Shift screen showing time on shift and water logged against an hourly target", caption: "Shift" },
] as const;
