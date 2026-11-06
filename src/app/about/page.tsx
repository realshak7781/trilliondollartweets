import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Trillion Dollar Tweets",
};

export default function AboutPage() {
  return (
    <main className="page">
      <h1>About</h1>
      <p>hi, im sharique.</p>
      <p>im the CTO (Chief Taste Officer) of this site.</p>
      <p>
        Bored of ur algorithm, read and listen to some mind boggling tweets and
        podcasts.
      </p>
      <p>tweets,songs and podcasts are selected by me, blame my taste</p>
      <p>But if you love the taste do reach out!</p>
      <p>thanks for visiting!</p>
    </main>
  );
}
