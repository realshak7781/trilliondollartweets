import React from "react";

export function XLogo({ className = "tweet-logo" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.739L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LinkIcon({ className = "icon-link" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l1.83-1.83a5 5 0 0 0-7.07-7.07l-1.03 1.03" />
      <path d="M14 11a5 5 0 0 0-7.54-.54L4.63 12.3a5 5 0 0 0 7.07 7.07l1.03-1.03" />
    </svg>
  );
}

export function RazorpayIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.077 6.476l-.988 3.569 5.65-3.589-3.695 13.54 3.752.004 5.457-20L7.077 6.476z"
        fill="#fff"
      />
      <path
        d="M1.455 14.308L0 20h7.202L10.149 8.42l-8.694 5.887z"
        fill="#fff"
      />
    </svg>
  );
}

