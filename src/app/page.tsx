import Link from "next/link";
import {
  ArrowRightIcon,
  ClipboardCheckIcon,
  CloudLightningIcon,
  DatabaseIcon,
  GaugeIcon,
  HeartPulseIcon,
  MapIcon,
  PlaneLandingIcon,
  RadarIcon,
  ServerIcon,
  ShieldAlertIcon,
  SparklesIcon,
} from "lucide-react";

import BlurFade from "@/components/magicui/blur-fade";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { PhoneFrame } from "@/components/phone-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AIRPORTS, FEATURES, OUTDOOR, PIPELINE, SCREENS, SITE } from "@/data/site";

const FEATURE_ICONS = {
  gauge: GaugeIcon,
  boards: PlaneLandingIcon,
  radar: RadarIcon,
  checklist: ClipboardCheckIcon,
  map: MapIcon,
  heart: HeartPulseIcon,
} as const;

const PIPELINE_ICONS = [CloudLightningIcon, DatabaseIcon, ServerIcon, SparklesIcon] as const;

const STATUS = [
  { label: "Normal ops", tone: "bg-status-ok", note: "Nothing in the weather or NOTAMs that limits ramp work." },
  { label: "Caution", tone: "bg-status-caution", note: "Gusts near your limits, heat stress, stale weather." },
  { label: "Warning", tone: "bg-status-warning", note: "Thunderstorms nearby, ice, gusts over your limits." },
] as const;

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-strong">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {intro ? <p className="text-lg text-muted-foreground text-pretty">{intro}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[420px]" aria-hidden="true">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={3}
            gridGap={5}
            color="var(--brand)"
            maxOpacity={0.25}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:pb-24">
          <div className="space-y-7">
            <BlurFade>
              <Badge variant="brand" className="px-2.5 py-1 text-sm">
                For apron, ramp and cargo crews
              </Badge>
            </BlurFade>
            <BlurFade delay={0.05}>
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Everything the ramp needs to know, in one glance.
              </h1>
            </BlurFade>
            <BlurFade delay={0.1}>
              <p className="max-w-xl text-lg text-muted-foreground text-pretty sm:text-xl">
                GroundKit turns airport weather, NOTAMs and live traffic into a ramp status, arrival and departure
                boards, a turnaround checklist and a shift companion. Large type, glove-sized buttons and status you
                can read in full sun.
              </p>
            </BlurFade>
            <BlurFade delay={0.15}>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="brand">
                  <Link href="#features">
                    See what it does
                    <ArrowRightIcon />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={SITE.dashboardUrl}>Open the live dashboard</Link>
                </Button>
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">iPhone and iPad</span> · iOS 18 or later
                </li>
                <li>
                  <span className="font-medium text-foreground">Android</span> · 8.0 or later
                </li>
                <li>App Store and Google Play: coming soon</li>
              </ul>
            </BlurFade>
          </div>

          <BlurFade delay={0.15} className="relative mx-auto w-full max-w-md">
            <div className="relative flex justify-center">
              <PhoneFrame
                src={SCREENS[1].src}
                alt={SCREENS[1].alt}
                className="absolute left-0 top-10 hidden w-[46%] -rotate-6 opacity-95 sm:block"
              />
              <PhoneFrame
                src={SCREENS[0].src}
                alt={SCREENS[0].alt}
                priority
                className="relative z-10 w-[62%] sm:w-[54%]"
              />
              <PhoneFrame
                src={SCREENS[2].src}
                alt={SCREENS[2].alt}
                className="absolute right-0 top-10 hidden w-[46%] rotate-6 opacity-95 sm:block"
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Ramp status */}
      <section className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Ramp status"
            title="One answer before you walk out the door."
            intro="GroundKit reads the latest METAR, TAF and NOTAMs for your airport and boils them down to one status, with the reasons a tap away."
          />
          <ul className="grid gap-3 sm:grid-cols-3">
            {STATUS.map((s, i) => (
              <BlurFade key={s.label} delay={0.05 * i} inView>
                <li className="h-full rounded-xl border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <span className={`size-3 rounded-full ${s.tone}`} aria-hidden="true" />
                    <span className="font-semibold">{s.label}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{s.note}</p>
                </li>
              </BlurFade>
            ))}
          </ul>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Features"
          title="Built around a turnaround, not a desk."
          intro="Six tools that cover a shift on the apron, from the first look at the weather to the handover note for the next crew."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = FEATURE_ICONS[f.icon];
            return (
              <BlurFade key={f.title} delay={0.04 * i} inView>
                <li className="flex h-full flex-col rounded-xl border bg-card p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid size-10 place-items-center rounded-lg bg-brand/15 text-brand-strong">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="flex gap-1">
                      {f.platforms.map((p) => (
                        <Badge key={p} variant="outline" className="text-muted-foreground">
                          {p}
                        </Badge>
                      ))}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </li>
              </BlurFade>
            );
          })}
        </ul>
      </section>

      {/* Screens */}
      <section aria-labelledby="screens-heading" className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-strong">On iPhone</p>
            <h2 id="screens-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Real data, real airport.
            </h2>
            <p className="text-lg text-muted-foreground">
              Screenshots from the iPhone app at Hong Kong International, on live data.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {SCREENS.map((s, i) => (
              <BlurFade key={s.src} delay={0.05 * i} inView>
                <li className="space-y-3">
                  <PhoneFrame src={s.src} alt={s.alt} sizes="(min-width: 1024px) 250px, 45vw" />
                  <p className="text-center text-sm font-medium">{s.caption}</p>
                </li>
              </BlurFade>
            ))}
          </ul>
        </div>
      </section>

      {/* Built for outside */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Built for outside"
          title="Readable in glare, rain and gloves."
          intro="Designed for the apron first: big targets, plain words and nothing that depends on colour alone."
        />
        <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {OUTDOOR.map((o) => (
            <div key={o.title} className="border-l-2 border-brand pl-4">
              <dt className="font-semibold">{o.title}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{o.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Airports */}
      <section id="airports" className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Airports"
            title="Seven airports today."
            intro="Weather, NOTAMs and traffic are collected for each of these. Notices for the Australian airports are not yet included."
          />
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {AIRPORTS.map((a) => (
              <li key={a.iata} className="rounded-xl border bg-card p-4">
                <p className="font-mono text-2xl font-semibold tracking-tight">{a.iata}</p>
                <p className="mt-1 text-sm">{a.name}</p>
                <p className="text-xs text-muted-foreground">{a.country}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Open data, one warehouse, two apps."
          intro="The same data platform feeds the iOS app, the Android app and the web dashboard, so they agree on every board."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {PIPELINE.map((p, i) => {
            const Icon = PIPELINE_ICONS[i];
            return (
              <li key={p.step} className="relative rounded-xl border bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                  <Icon className="size-5 text-brand-strong" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-semibold">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            );
          })}
        </ol>
        <p className="mt-8 text-sm text-muted-foreground">
          Health data never leaves your phone or your own iCloud. Read the{" "}
          <Link href="/privacy" className="font-medium text-foreground underline underline-offset-4">
            privacy policy
          </Link>
          .
        </p>
      </section>

      {/* Advisory + CTA */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-brand px-6 py-12 text-brand-foreground sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-balance">
                See today&apos;s conditions at your airport.
              </h2>
              <p className="max-w-xl text-brand-foreground/80">
                The web dashboard runs on the same data as the apps. GroundKit for iOS and Android is coming to the App
                Store and Google Play.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild size="lg" className="bg-brand-foreground text-brand hover:bg-brand-foreground/90">
                <Link href={SITE.dashboardUrl}>Open the dashboard</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-brand-foreground/30 bg-transparent text-brand-foreground hover:bg-brand-foreground/10 hover:text-brand-foreground dark:bg-transparent dark:border-brand-foreground/30 dark:hover:bg-brand-foreground/10"
              >
                <Link href="/support">Get support</Link>
              </Button>
            </div>
          </div>
          <div className="mt-10 flex items-start gap-3 border-t border-brand-foreground/20 pt-6 text-sm text-brand-foreground/80">
            <ShieldAlertIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <p>
              GroundKit is advisory. Ramp closures, lightning alerts and wind limits are the airport&apos;s and airline&apos;s
              call, and local procedures always take precedence. Wellbeing figures are guidance, not medical advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
