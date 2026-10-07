# GroundKit website

The introduction and promotional site for **GroundKit**, the app for apron, ramp and cargo crews ([iOS](https://github.com/watanaberyunosuke/groundkit-ios), [Android](https://github.com/watanaberyunosuke/groundkit-android)). It also hosts the privacy policy and support page the app store listings link to.

Built with Next.js (App Router), Tailwind CSS, [shadcn/ui](https://ui.shadcn.com/) and [Magic UI](https://magicui.design/), the same stack as [personal-portfolio](https://github.com/watanaberyunosuke/personal-portfolio). Deployed on Vercel.

## Pages

| Route | Content |
|---|---|
| `/` | Landing page: ramp status, features, screenshots, airports, how it works |
| `/privacy` | Privacy policy for the apps and this site |
| `/support` | Common questions and how to report a problem |

Copy lives in `src/data/site.ts` (features, airports, links) and in the page files. Screenshots are in `public/screens/` (iPhone 17 simulator, resized to 552 x 1200 JPEG).

## Develop

```bash
yarn install
yarn dev        # http://localhost:3000
yarn lint
yarn build
```

`NEXT_PUBLIC_SITE_URL` sets the canonical URL used in metadata and Open Graph tags; without it the Vercel production URL is used.

## Deploy

The Vercel project is connected to this repository: pushes to `main` deploy to production and pull requests get preview deployments. Vercel Web Analytics is enabled through `@vercel/analytics`.

## Licence

MIT.
