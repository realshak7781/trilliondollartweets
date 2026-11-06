"use client";

import React from "react";
import type { Podcast } from "@/types/podcast";

interface PodcastCardProps {
  podcast: Podcast;
}

export function PodcastCard({ podcast }: PodcastCardProps) {
  return (
    <article
      className="group relative flex flex-col justify-between p-6 border border-[rgba(158,144,136,0.22)] bg-[rgba(44,34,30,0.35)] hover:bg-[rgba(44,34,30,0.65)] hover:border-[#D49354] transition-all duration-300 min-h-[18.5rem] gap-5"
      id={`podcast-${podcast.id || podcast.title.toLowerCase().replace(/\s+/g, "-")}`}
      data-podcast-card=""
    >
      {/* Accessible full-card link */}
      <a
        className="absolute inset-0 z-10"
        href={podcast.episodeUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Listen to ${podcast.title} on ${podcast.channelName}`}
      >
        <span className="sr-only">
          Listen to {podcast.title} on {podcast.channelName} (YouTube)
        </span>
      </a>

      {/* Top Header: Category Tag & Platform Prompt */}
      <div className="flex items-center justify-between text-[0.72rem] tracking-[0.14em] uppercase">
        <span className="inline-flex items-center gap-1.5 text-[#9E9088] font-sans font-light">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D49354]" />
          Podcast
        </span>
        <div className="flex items-center gap-1 text-[#D49354] group-hover:text-[#E5A869] transition-colors font-sans">
          <span>YouTube</span>
          <svg
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>

      {/* Episode Identity & Key Takeaway */}
      <div className="flex flex-col gap-3">
        {/* Title & Channel Name */}
        <div>
          <h2 className="font-serif text-[1.65rem] sm:text-[1.85rem] font-normal tracking-tight text-[#ECE5DA] leading-tight transition-colors duration-200 group-hover:text-[#D49354]">
            {podcast.title}
          </h2>
          <p className="mt-1 font-sans text-[0.78rem] tracking-[0.14em] uppercase text-[#9E9088] font-light">
            {podcast.channelName}
          </p>
        </div>

        {/* Subtle Divider */}
        <div className="h-px w-12 bg-[#D49354]/40 my-1" />

        {/* Why I Recommend It */}
        <div className="space-y-1">
          <span className="font-sans text-[0.66rem] tracking-[0.18em] uppercase text-[#D49354] font-medium">
            Why I Recommend It
          </span>
          <p className="font-sans text-[0.92rem] leading-[1.65] text-[#ECE5DA]/90 font-light">
            {podcast.whyILikeIt}
          </p>
        </div>
      </div>

      {/* Bottom Action: Tactile Listen Button */}
      <div className="mt-auto pt-4 flex items-center justify-between border-t border-[rgba(158,144,136,0.14)]">
        <div className="inline-flex items-center gap-2.5 text-[#ECE5DA] group-hover:text-[#D49354] transition-colors">
          <div className="w-8 h-8 rounded-full bg-[#D49354]/15 border border-[#D49354]/40 flex items-center justify-center text-[#D49354] group-hover:bg-[#D49354] group-hover:text-[#231D1B] transition-all duration-200 shadow-sm">
            <svg
              className="w-3.5 h-3.5 fill-current ml-0.5"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="font-sans text-[0.78rem] tracking-[0.1em] uppercase font-medium">
            Listen to Episode
          </span>
        </div>
        <span className="font-sans text-[0.7rem] tracking-[0.14em] uppercase text-[#9E9088]/70">
          YouTube ↗
        </span>
      </div>
    </article>
  );
}

