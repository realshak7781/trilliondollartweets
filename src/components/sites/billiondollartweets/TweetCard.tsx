"use client";

import React, { useState, useRef } from "react";
import type { Tweet } from "@/types/tweet";
import { LinkIcon, XLogo } from "./Icons";

interface TweetCardProps {
  tweet: Tweet;
  isHighlighted?: boolean;
}

export function TweetCard({ tweet, isHighlighted }: TweetCardProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const shareUrl = `${window.location.origin}/t/${tweet.id}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      window.prompt("Copy link", shareUrl);
    }

    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <article
      className={`tweet-card${isHighlighted ? " is-highlighted" : ""}`}
      id={`tweet-${tweet.id}`}
      data-tweet-card=""
      data-tweet-id={tweet.id}
      data-category={tweet.category}
    >
      <a
        className="tweet-stretched"
        href={tweet.url}
        target="_blank"
        rel="noreferrer"
      >
        <span className="sr-only">Open {tweet.title} on X</span>
      </a>
      <div className="tweet-meta">
        <span className="tweet-kind">{tweet.kind}</span>
        <div className="tweet-actions">
          <button
            className={`tweet-copy${copied ? " is-copied" : ""}`}
            type="button"
            data-copy-link=""
            data-tweet-id={tweet.id}
            aria-label={copied ? "Link copied!" : "Copy link"}
            onClick={handleCopy}
          >
            <LinkIcon />
            <span className="copy-feedback">link copied!</span>
          </button>
          <XLogo />
        </div>
      </div>
      <h2 className="tweet-title">{tweet.title}</h2>
      <p className="tweet-text">{tweet.text}</p>
      <div className="tweet-byline">
        <div className="tweet-attribution">
          <span className="tweet-author">{tweet.author}</span>
          <span className="tweet-handle">{tweet.handle}</span>
        </div>
        <span className="tweet-category">{tweet.badgeCategory || tweet.category}</span>
      </div>
    </article>
  );
}

