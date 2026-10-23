# SEO audit — Kanthalloor Tours & Stays

Audit updated: 2026-10-14

## Current public architecture

The site is dependency-free static HTML served from `public/`. Important page content is present in the initial HTML and does not depend on client-side rendering.

Six pages are indexable and included in `public/sitemap.xml`:

- `/`
- `/kanthalloortour-packages.html`
- `/kanthalloor-experiences.html`
- `/kanthalloormudhouse-stays.html`
- `/places-to-visit-in-kanthalloor.html`
- `/contact.html`

`/photo-credits.html` remains publicly reachable only to satisfy image and icon attribution requirements. It has `noindex, follow`, is absent from normal navigation, and is omitted from the sitemap.

`public/robots.txt` allows crawling and points to the production sitemap. Canonical URLs use the non-`www` HTTPS host: `https://kanthalloortouristguide.com`.

## Page-level SEO

Every HTML page currently has:

- one title and one meta description;
- a canonical URL;
- an explicit robots directive;
- one H1;
- Open Graph title, description, and image metadata;
- X/Twitter card metadata;
- the Google Analytics tag for property `G-DMPG44LXDZ`.

Descriptions are currently between 94 and 126 characters. Titles are distinct and aligned with each page’s search intent. Title display remains search-engine dependent; character count is not a strict ranking or truncation rule.

## Search intent and visible content

- Home: Kanthalloor packages, stays, mud-house experiences, sightseeing, and jeep safari enquiries.
- Packages: adaptable tour structures rather than fixed or unverified bookable products.
- Experiences: seasonal farms, jeep safari, viewpoints, waterfalls, village activities, and authorised forest activities.
- Stays: resorts, homestays, farm stays, and mud-house enquiries subject to current availability.
- Places: Kanthalloor attractions, the canonical Kanthalloor Waterfalls/Keezhanthoor Waterfalls listing, nearby Marayoor heritage, and protected Chinnar activities.
- Contact: direct phone, WhatsApp, and email enquiry options.

The alternate spelling `Kanathalloor` is used selectively where relevant without hidden keyword lists or repetitive keyword stuffing.

## Structured data

Current JSON-LD coverage:

- Home: `WebSite`, `Organization`, `TouristDestination`, `WebPage`, and `Service` with `OfferCatalog`.
- Packages: `Service`.
- Experiences: `WebPage` and `BreadcrumbList`.
- Stays: `WebPage` and `BreadcrumbList`.
- Places: `WebPage` and `BreadcrumbList`.
- Contact: `ContactPage` with its related `Organization`.

The homepage `Organization` also includes a maintained description and two
customer-service `ContactPoint` entries using the public telephone numbers and
booking email address. Verified social profiles are still required before a
`sameAs` array should be added.

All JSON-LD blocks parse successfully as JSON. They avoid unsupported ratings, reviews, prices, availability, opening hours, or guarantees. Local parsing does not prove eligibility for a Google rich-result feature.

## Images and performance

- All rendered images have `alt`, `width`, and `height` attributes.
- Decorative brand and interface images use empty alternative text.
- Primary hero images are eagerly loaded; below-the-fold images use lazy loading.
- Major content images use WebP and responsive `srcset` variants where available.
- Recently added Thoovanam Waterfalls, Chinnar nature trek, and Elephant Watchtower images have production-sized 640px and 1200px WebP versions.
- Original oversized source SVG wrappers are kept outside `public/` and are not deployed.

## Links and accessibility

- No broken local `href` or `src` references were detected.
- Primary, mobile, and footer navigation use crawlable links with meaningful labels.
- Every main page marks its current navigation item with `aria-current="page"`.
- WhatsApp links use `noopener noreferrer` when opening a new tab.
- Skip links, landmarks, heading hierarchy, focus styling, and reduced-motion handling remain present.

## Sitemap status

The sitemap contains all six indexable pages and excludes the noindex attribution page. Current modification dates are `2026-10-14`.

## Local validation completed

- HTML validation for every page in `public/`.
- JSON parsing for every `application/ld+json` block.
- One-H1 checks.
- Canonical, robots, social metadata, analytics, image-alt, and image-dimension checks.
- Local `href` and `src` existence checks.
- Sitemap coverage comparison against indexable HTML pages.
- `git diff --check`.

## Deployment-dependent checks still required

After deployment:

1. Move the static deployment to Cloudflare Pages, Netlify, Apache/cPanel, or another host that applies the prepared security-header policy. GitHub Pages currently ignores both `_headers` and `.htaccess`.
2. Confirm HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy and Permissions-Policy on the live HTTPS response.
3. Test the production URLs with Google Rich Results Test or Schema Markup Validator.
4. Inspect canonical selection and indexing in Google Search Console.
5. Submit or resubmit `https://kanthalloortouristguide.com/sitemap.xml`.
6. Monitor Core Web Vitals, crawl errors, search queries, and click-through rate.
7. Add verified social profile URLs to visible links and `Organization.sameAs` only when the exact business profiles are available.

SEO improvements do not guarantee rankings. Continued performance depends on accurate original content, maintained local information, trustworthy references, and production monitoring.
