import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link className="site-name" href="/">
        Trillion Dollar Tweets
      </Link>
      <nav>
        <Link href="/about">about</Link>
        <Link href="/menifeso">manifesto</Link>
        <Link href="/newsletter">newsletter</Link>
        <a
          href="https://forms.gle/Z22T6f76AEQ4izQD8"
          target="_blank"
          rel="noreferrer"
        >
          teach my algorithm
        </a>
        <a
          href="https://forms.gle/v42iKXxxdzBa6knn9"
          target="_blank"
          rel="noreferrer"
        >
          suggest
        </a>
      </nav>
    </header>
  );
}
