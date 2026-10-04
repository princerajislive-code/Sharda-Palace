import React from 'react';

interface InstagramLogoProps {
  className?: string;
  size?: number;
  variant?: 'glyph' | 'gradient-badge' | 'button';
  label?: string;
}

export const SHARDA_INSTAGRAM_URL = 'https://www.instagram.com/sharda_palace_hotel?stkn=eHNnenN6c2hybzYz';
export const SHARDA_INSTAGRAM_HANDLE = '@sharda_palace_hotel';

export const InstagramLogo: React.FC<InstagramLogoProps> = ({
  className = 'w-5 h-5',
  size = 20,
  variant = 'glyph',
  label = 'Follow on Instagram',
}) => {
  // Official Instagram Gradient SVG Glyph
  if (variant === 'gradient-badge') {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-xl p-2 bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white shadow-xs ${className}`}
        title="Sharda Palace on Instagram"
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </div>
    );
  }

  if (variant === 'button') {
    return (
      <a
        href={SHARDA_INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 active:scale-98 transition-all duration-200 shadow-sm ${className}`}
        title="Follow Sharda Palace on Instagram"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white group-hover:scale-110 transition-transform"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
        <span className="font-semibold tracking-wide">{label}</span>
      </a>
    );
  }

  // Standalone vector glyph with native Instagram gradient
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-label="Instagram"
    >
      <defs>
        <linearGradient id="ig-gradient-def" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect
        width="20"
        height="20"
        x="2"
        y="2"
        rx="5"
        ry="5"
        stroke="url(#ig-gradient-def)"
        strokeWidth="2"
      />
      <path
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        stroke="url(#ig-gradient-def)"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-gradient-def)" />
    </svg>
  );
};
