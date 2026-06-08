# Core Web Vitals Performance Optimization: React News Feed

This project demonstrates the "break it, then fix it" methodology for frontend performance optimization. It showcases a React-based news feed application built in two phases:
1. **v1-broken**: Riddled with five common performance anti-patterns affecting Largest Contentful Paint (LCP), First Contentful Paint (FCP), Cumulative Layout Shift (CLS), and Total Blocking Time (TBT).
2. **v2-fixed**: Refactored to apply industry-standard modern performance optimization techniques, raising the Lighthouse performance score from **21** to **99**.

---

## Core Web Vitals Performance Report

The following metrics were measured in a throttled environment (**Mobile, Slow 4G, 4x CPU slowdown**) using Chrome Lighthouse CLI.

| Metric | v1 Broken | v2 Fixed | Improvement (Δ) | Status |
| :--- | :---: | :---: | :---: | :---: |
| **First Contentful Paint (FCP)** | 3.0 s | 1.2 s | -1.8 s (60.0%) | 🟢 Good (≤ 1.8s) |
| **Largest Contentful Paint (LCP)** | 14.7 s | 2.1 s | -12.6 s (85.7%) | 🟢 Good (≤ 2.5s) |
| **Cumulative Layout Shift (CLS)** | 0.528 | 0.005 | -0.523 (99.1%) | 🟢 Good (≤ 0.1) |
| **Time to Interactive (TTI)** | 14.7 s | 2.1 s | -12.6 s (85.7%) | 🟢 Good (≤ 3.8s) |
| **Total Blocking Time (TBT)** | 1,750 ms | 90 ms | -1,660 ms (94.9%) | 🟢 Good (≤ 200ms) |
| **Overall Performance Score** | **21** (Red) | **99** (Green) | **+78 points** | 🟢 Good (90-100) |

---

## Performance Diagnostics & Optimization Breakdown

### 1. Render-Blocking Fonts & CSS (FCP Optimization)
* **Anti-Pattern (v1)**: The Playfair Display Google Font and local stylesheets were loaded synchronously in the `<head>`, halting HTML parsing and page rendering until network completion.
* **Fix (v2)**:
  * Added `<link rel="preconnect">` and `<link rel="preconnect" crossorigin>` to warm up DNS lookup and connection handshakes for `fonts.googleapis.com` and `fonts.gstatic.com`.
  * Asynchronously loaded the font stylesheet using `<link rel="stylesheet" media="print" onload="this.media='all'">` with a `<noscript>` fallback.
  * Ensured `display=swap` parameter was present in the Google Fonts URL to tell the browser to render a fallback system font immediately while downloading the custom font.

### 2. Unoptimized Hero Image (LCP Optimization)
* **Anti-Pattern (v1)**: Renders a raw 2.5MB PNG file, lacks width/height attributes, and applies `loading="lazy"` to a prominent above-the-fold hero banner.
* **Fix (v2)**:
  * Converted the 2.5MB PNG hero image to a highly compressed WebP format (151KB, a **94% reduction in file size**) using `sharp-cli`.
  * Provided explicit intrinsic dimensions (`width={1200} height={630}`) to allow the browser to calculate layout aspect-ratio immediately.
  * Added the `fetchPriority="high"` attribute to prompt early network fetching.
  * Added a `<link rel="preload" as="image">` element in `index.html` to discover the hero image during initial HTML parsing.
  * Removed the `loading="lazy"` attribute, as above-the-fold images should always load eagerly.

### 3. Dynamic Content & Image Dimensions (CLS Optimization)
* **Anti-Pattern (v1)**: Images in the article list and author avatars lacked dimensions. Furthermore, an advertisement banner was dynamically injected into the layout after 1.2s via a `setTimeout` hook, pushing all page elements downward unexpectedly.
* **Fix (v2)**:
  * Assigned explicit `width` and `height` properties to the article grid thumbnails (`300x200`) and author avatars (`40x40`) while keeping CSS styles set to responsive scaling (`width: 100%; height: auto;`).
  * Enclosed the late-loading `AdBanner` in a static wrapper element with a reserved minimum height (`minHeight: 90px; marginBottom: 24px;`). The layout maintains its layout footprint even before the ad renders, completely eliminating shift.

### 4. Main-Thread Blocking Task (TTI/TBT Optimization)
* **Anti-Pattern (v1)**: A synchronous `while` loop spun on mount for 600ms inside `App.tsx` (simulating analytics setup), freezing the entire browser tab during loading.
* **Fix (v2)**:
  * Removed the heavy blocking `while` loop from the initial component mount.
  * Wrapped the simulated analytics initializer in a deferred callback. Used the browser's native `scheduler.postTask` API with background priority when available, falling back to a macro-queued `setTimeout(..., 0)`.

### 5. Excessive JavaScript Bundle Size (TTI Optimization)
* **Anti-Pattern (v1)**: Imported the entire `lodash` utility suite (`import _ from 'lodash'`) just to run a single array-sorting operation. This inflated the final compiled JS asset payload.
* **Fix (v2)**:
  * Removed the `lodash` import entirely.
  * Re-implemented the date sorting logic using standard modern ECMAScript array methods: `[...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())`.
  * Reduced the production bundle size by **71.4 KB** (from 283.2 KB down to 211.7 KB raw), accelerating JS download, parsing, and compilation times on slower mobile devices.

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- Chrome Browser (to inspect/verify locally)

### Installation
1. Clone this repository and check out the desired branch:
   - For the unoptimized version: `git checkout v1-broken`
   - For the optimized version: `git checkout v2-fixed`
2. Install dependencies:
   ```bash
   npm install
   ```

### Building and Previewing
To build the application and view the compiled bundle visualizer report (`bundle-stats.html`):
```bash
npm run build
```
To serve the production build locally:
```bash
npm run preview
```
Open [http://localhost:4173/](http://localhost:4173/) in your browser.
