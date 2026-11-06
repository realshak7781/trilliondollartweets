"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Tweet } from "@/types/tweet";
import type { Song } from "@/types/song";
import type { Podcast } from "@/types/podcast";
import songsData from "@/data/songs.json";
import podcastsData from "@/data/podcasts.json";
import { TweetCard } from "./TweetCard";
import { SongCard } from "./SongCard";
import { PodcastCard } from "./PodcastCard";

const songs: Song[] = songsData as Song[];
const podcasts: Podcast[] = podcastsData as Podcast[];

interface TweetGridProps {
  initialTweets: Tweet[];
}

export function TweetGrid({ initialTweets }: TweetGridProps) {
  const searchParams = useSearchParams();
  const tweetParam = searchParams.get("tweet");

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  // Compute category options with real counts (case-insensitive & trimmed)
  const categoryOptions = useMemo(() => {
    const categoriesInOrder = [
      "AI",
      "Career",
      "Creative",
      "Distribution",
      "Health",
      "Learning",
      "Misc",
      "Open Source",
      "Podcasts",
      "Software",
      "Songs",
      "Startups",
      "UI",
      "Wealth",
    ];

    const counts: Record<string, number> = {};
    for (const cat of categoriesInOrder) {
      counts[cat] = 0;
    }

    for (const t of initialTweets) {
      const raw = (t.category || "").trim();
      if (!raw) continue;
      const canonicalMatch = categoriesInOrder.find(
        (c) => c.toLowerCase() === raw.toLowerCase()
      );
      const key = canonicalMatch || raw;
      counts[key] = (counts[key] || 0) + 1;
    }

    counts["Songs"] = songs.length;
    counts["Podcasts"] = podcasts.length;

    const list = [
      {
        value: "all",
        label: "All categories",
        count: initialTweets.length + songs.length + podcasts.length,
      },
    ];

    for (const cat of categoriesInOrder) {
      list.push({
        value: cat,
        label: cat,
        count: counts[cat] || 0,
      });
    }

    for (const cat of Object.keys(counts)) {
      if (
        !categoriesInOrder.some(
          (c) => c.toLowerCase() === cat.toLowerCase()
        )
      ) {
        list.push({
          value: cat,
          label: cat,
          count: counts[cat],
        });
      }
    }

    return list;
  }, [initialTweets]);

  // If deep link is present, default category view shows all
  const effectiveCategory = tweetParam ? "all" : selectedCategory;

  const activeCategoryOption = useMemo(() => {
    return (
      categoryOptions.find(
        (c) => c.value.toLowerCase() === effectiveCategory.toLowerCase().trim()
      ) || categoryOptions[0]
    );
  }, [categoryOptions, effectiveCategory]);

  const filteredTweets = useMemo(() => {
    if (effectiveCategory.toLowerCase() === "all") return initialTweets;
    const target = effectiveCategory.trim().toLowerCase();
    return initialTweets.filter(
      (t) => (t.category || "").trim().toLowerCase() === target
    );
  }, [initialTweets, effectiveCategory]);

  // Scroll to deep-linked tweet on load or query param change
  useEffect(() => {
    if (!tweetParam) return;

    const timer = setTimeout(() => {
      const el = document.getElementById(`tweet-${tweetParam}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [tweetParam]);

  // Close dropdown on click outside or escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelectOption = (value: string) => {
    setSelectedCategory(value);
    setIsMenuOpen(false);
  };

  const isAllCategory = effectiveCategory.toLowerCase().trim() === "all";
  const isSongsCategory = effectiveCategory.toLowerCase().trim() === "songs";
  const isPodcastsCategory = effectiveCategory.toLowerCase().trim() === "podcasts";
  const displayedSongs =
    isSongsCategory || isAllCategory ? songs : [];
  const displayedPodcasts =
    isPodcastsCategory || isAllCategory ? podcasts : [];

  return (
    <>
      <hr className="rule" />
      <div className="organize" data-category-filter="">
        <p className="tweet-count" data-tweet-count="">
          {isSongsCategory
            ? `Total songs: ${songs.length}`
            : isPodcastsCategory
            ? `Total podcasts: ${podcasts.length}`
            : `Total tweets: ${filteredTweets.length + (isAllCategory ? songs.length + podcasts.length : 0)}`}
        </p>
        <p className="tweet-note">
          all tweets are hand-picked and reviewed by{" "}
          <Link href="/about">CTO (Chief Taste Officer)</Link>.
        </p>
        <div className="filter" ref={filterRef}>
          <button
            className="filter-trigger"
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isMenuOpen}
            aria-controls="category-menu"
            aria-label="Filter by category"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen((prev) => !prev);
            }}
          >
            <span data-filter-label="">{activeCategoryOption.label}</span>
            <span className="filter-count" data-filter-count="">
              {activeCategoryOption.count}
            </span>
          </button>
          <ul
            className="filter-menu"
            id="category-menu"
            role="listbox"
            hidden={!isMenuOpen}
            ref={menuRef}
            onWheel={(e) => {
              e.stopPropagation();
            }}
          >
            {categoryOptions.map((opt) => (
              <li
                key={opt.value}
                role="option"
                aria-selected={opt.value === activeCategoryOption.value}
                data-value={opt.value}
                data-label={opt.label}
                data-count={opt.count}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectOption(opt.value);
                }}
              >
                <span>{opt.label}</span>
                <span className="filter-count">{opt.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="rule" />

      <section className="tweet-grid">
        {isSongsCategory ? (
          songs.length === 0 ? (
            <div className="col-span-full py-20 text-center flex flex-col items-center justify-center">
              <p className="font-serif text-2xl italic text-[var(--text-primary)]">
                No songs cataloged yet in this category.
              </p>
              <p className="mt-2 font-sans text-xs uppercase tracking-widest text-[var(--text-muted)]">
                Archive additions in progress
              </p>
            </div>
          ) : (
            songs.map((song) => (
              <SongCard key={song.id || song.title} song={song} />
            ))
          )
        ) : isPodcastsCategory ? (
          podcasts.length === 0 ? (
            <div className="col-span-full py-20 text-center flex flex-col items-center justify-center">
              <p className="font-serif text-2xl italic text-[var(--text-primary)]">
                No podcasts cataloged yet in this category.
              </p>
              <p className="mt-2 font-sans text-xs uppercase tracking-widest text-[var(--text-muted)]">
                Archive additions in progress
              </p>
            </div>
          ) : (
            podcasts.map((podcast) => (
              <PodcastCard
                key={podcast.id || podcast.title}
                podcast={podcast}
              />
            ))
          )
        ) : filteredTweets.length === 0 &&
          displayedSongs.length === 0 &&
          displayedPodcasts.length === 0 ? (
          <div className="col-span-full py-20 text-center flex flex-col items-center justify-center">
            <p className="font-serif text-2xl italic text-[var(--text-primary)]">
              No archived entries cataloged yet in this category.
            </p>
            <p className="mt-2 font-sans text-xs uppercase tracking-widest text-[var(--text-muted)]">
              Archive additions in progress
            </p>
          </div>
        ) : (
          <>
            {filteredTweets.map((tweet) => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                isHighlighted={tweet.id === tweetParam}
              />
            ))}
            {isAllCategory && (
              <>
                {songs.map((song) => (
                  <SongCard key={song.id || song.title} song={song} />
                ))}
                {podcasts.map((podcast) => (
                  <PodcastCard
                    key={podcast.id || podcast.title}
                    podcast={podcast}
                  />
                ))}
              </>
            )}
          </>
        )}
      </section>
    </>
  );
}
