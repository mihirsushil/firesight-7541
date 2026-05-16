import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FireSight — See the fire before it spreads.',
  description: 'FireSight delivers real‑time wildfire intelligence by fusing satellite imagery with adaptive AI, giving agencies and utilities instant, actionable insights without weeks of setup. Our platform scales with your team, offering affordable, personalized predictions that help prevent loss, protect infrastructure, and save ecosystems.',
  openGraph: {
    title: 'FireSight',
    description: 'See the fire before it spreads.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
