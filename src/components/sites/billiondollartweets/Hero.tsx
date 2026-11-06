import Image from "next/image";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-promo">
        <span className="hero-promo-tag">[ ARCHIVE UPDATE // 01 ]</span>
        <span className="hero-promo-text">
          NOW CATALOGED: PODCASTS &amp; SONGS IN CATEGORIES
        </span>
      </div>
      <div className="hero-body">
        <div className="hero-copy">
          <h1>Trillion Dollar Tweets</h1>
          <div className="manifesto">
            <p>
              Twitter has some of the smartest people on Earth. And they share
              incredibly valuable ideas and insights.
            </p>
            <p>
              But with the huge volume of content and constantly changing
              algorithms, most of those ideas get buried and forgotten.
            </p>
            <p>Not anymore.</p>
          </div>
        </div>
        <Image
          className="hero-image"
          src="/siuuu_2.jpeg"
          alt="Trillion Dollar Tweets"
          width={1801}
          height={1741}
          priority
        />
      </div>
    </section>
  );
}
