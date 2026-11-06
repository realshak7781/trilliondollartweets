import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manifesto · Trillion Dollar Tweets",
};

export default function ManifestoPage() {
  return (
    <main className="page">
      <h1>Manifesto</h1>
      <p>
        Twitter has some of the smartest people on Earth. And they share
        incredibly valuable ideas and insights.
      </p>
      <p>
        But with the huge volume of content and constantly changing
        algorithms, most of those ideas get buried and forgotten.
      </p>
      <p>Not anymore.</p>
      <p>
        I&apos;m making this directory of the best tweets (that includes Tweets,
        Threads, and Articles) available on twitter.
      </p>
      <p>
        Every single tweet is hand-picked and reviewed by{" "}
        <Link href="/about">CTO (Chief Taste Officer)</Link> before getting
        added to the TrillionDollarTweets.
      </p>
      <p>Happy Learning!</p>
    </main>
  );
}
