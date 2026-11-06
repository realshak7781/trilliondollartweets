"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [toMars, setToMars] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setToMars(false);
      setStatus("enter your email.");
      return;
    }

    setToMars(false);
    setStatus("sending…");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.ok) {
        setStatus("");
        setToMars(true);
        setEmail("");

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setToMars(false);
        }, 10000);
        return;
      }

      setStatus(data?.error || "something went wrong. try again.");
    } catch {
      setStatus("something went wrong. try again.");
    }
  };

  return (
    <section
      className="jal-newsletter jal-newsletter--footer"
      aria-label="shariques newsletter"
    >
      <h2>sign up for the shariques newsletter.</h2>
      <p className="jal-copy">
        i promise i won&apos;t spam you or send AI slop. only short, handwritten
        msgs on tech , gym and fitness.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="your email"
          aria-label="your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status) setStatus("");
          }}
        />
        <button type="submit">shutup &amp; take my email!</button>
        <div className="jal-status" role="status">
          {toMars ? (
            <span className="to-mars-msg inline-flex items-center justify-center gap-2 text-[#ECE5DA] font-normal tracking-wide">
              <span>To Mars</span>
              <Image
                src="/rocket.png"
                alt="Rocket"
                width={18}
                height={18}
                className="w-[18px] h-[18px] object-contain invert brightness-95 inline-block"
              />
            </span>
          ) : (
            status && <span>{status}</span>
          )}
        </div>
      </form>
    </section>
  );
}

