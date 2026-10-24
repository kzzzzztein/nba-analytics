# CourtVision — Free NBA analytics dashboard

An independently built React NBA research dashboard deployable to **GitHub Pages** at no hosting cost.

## Features
- Responsive, dark-mode dashboard with live-attempt scoreboard and NBA news
- Player search, browser-local favorites, game-log filtering by opponent
- Last-5/10/20 averages, over hit rates, visual performance trends
- Transparent experimental projections and locally saved prop research
- Official injury-report link; injury status is **not automatically verified**
- GitHub Actions scheduled cached snapshots for news, games and teams

## Run locally

Requires Node.js 20+.

```bash
npm install
npm test
npm run dev
```

## Deploy to GitHub Pages
1. Create a **public** GitHub repository, e.g. `nba-analytics`.
2. Upload all project files (including `.github/workflows`) to the repository's `main` branch.
3. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
4. In **Actions**, run **Refresh NBA cache** manually once (or wait for the scheduled run).
5. Wait for **Deploy CourtVision** to finish. Open `https://YOUR_USERNAME.github.io/nba-analytics/`.

The Vite base path is automatically derived from the GitHub repository name in Actions.

## Data sources and limitations

- ESPN public scoreboard, player, game-log, and news endpoints are **unofficial and unsupported**. Availability, browser CORS and schema can change without warning. There is no guarantee that player search and game logs work in all browsers. The dashboard reports failures rather than inventing stats.
- The client first tries public ESPN feeds; scoreboard and news fall back to GitHub-cached JSON. The Python cache workflow runs every 30 minutes **best-effort**; scheduled workflows may be delayed or skipped, and GitHub Pages deploys are not real-time. No claims of instant live scores.
- This version has **no automated sportsbook odds**, **no automatic verified injury statuses**, **no calibrated prediction model**, and **no reliable automated last-10-opponent history beyond the game logs actually available**.
- Baseline projection: 65% mean of latest 5 + 35% mean of latest 20, with a normal approximation for probability. This is an **experimental descriptive model**, not a validated betting probability. No injury, minutes, opponent, or market adjustments are applied.
- Favorites and saved props use localStorage and are **not synced across devices**.
- Free feeds may have terms of use, rate limits, and data reuse restrictions. Check providers' terms before commercial use or high-volume scraping.
- No affiliation with NBA or ESPN. Not financial or betting advice.

## Future improvements

A proper backend or curated historical database is needed for dependable injury tracking, multi-season head-to-head research, calibrated forecasts, and historical prediction backtesting. Those capabilities are not claimed in this MVP.
