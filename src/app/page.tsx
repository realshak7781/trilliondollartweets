import { Suspense } from "react";
import { Hero } from "@/components/sites/billiondollartweets/Hero";
import { TweetGrid } from "@/components/sites/billiondollartweets/TweetGrid";
import tweetsData from "@/data/tweets.json";
import type { Tweet } from "@/types/tweet";

const tweets: Tweet[] = tweetsData as Tweet[];

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<div className="min-h-[20rem]" />}>
        <TweetGrid initialTweets={tweets} />
      </Suspense>
    </main>
  );
}
