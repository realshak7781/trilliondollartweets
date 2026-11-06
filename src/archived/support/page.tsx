import type { Metadata } from "next";
import { SponsorButton } from "@/components/sites/billiondollartweets/SponsorButton";

export const metadata: Metadata = {
  title: "Support · Trillion Dollar Tweets",
};

export default function SupportPage() {
  return (
    <main>
      <div className="page">
        <h1>Support</h1>
        <p>this site is a free, independently curated directory.</p>
        <p>
          i spend my personal time manually reviewing, finding, adding the best
          tweets and maintaining the quality of the tweets on it.
        </p>
        <p>if you find this site useful, please consider sponsoring it.</p>
        <p>it would mean a lot to an independent creator. &lt;3!</p>
        <SponsorButton />
      </div>
      <section className="tier">
        <h2>Platinum Sponsors</h2>
        <p className="tier-empty">be the first one</p>
      </section>
      <section className="tier">
        <h2>Gold Sponsors</h2>
        <p className="tier-empty">be the first one</p>
      </section>
      <section className="tier">
        <h2>Silver Sponsors</h2>
        <p className="tier-empty">be the first one</p>
      </section>
      <section className="tier">
        <h2>Kind Donors</h2>
        <p className="tier-empty">be the first one</p>
      </section>
    </main>
  );
}

