# Trillion Dollar Tweets

A hand-curated catalog of high-signal tweets, mind-boggling podcasts, and songs selected by the Chief Taste Officer.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling:** Tailwind CSS v4 & custom typography
- **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Data Structure

The catalog entries are maintained directly in JSON files under `src/data/`:
- `tweets.json` — Curated tweet collection
- `songs.json` — Curated songs recommendations
- `podcasts.json` — Curated podcast episodes

Updating any of these files and pushing to the `main` branch automatically deploys the updated data to the live site via Vercel.
