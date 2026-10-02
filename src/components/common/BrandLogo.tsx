import React from 'react';
import officialLogoImg from '../../assets/images/sharda_palace_logo_1790914145356.jpg';

export type LogoStyle = 'official' | 'monogram' | 'crest' | 'lotus' | 'modern';

interface BrandLogoProps {
  variant?: LogoStyle | string;
  className?: string;
  size?: number;
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = 'w-12 h-12 sm:w-14 sm:h-14 lg:w-[58px] lg:h-[58px]',
  alt = 'Sharda Palace Official Logo',
}) => {
  return (
    <div
      className={`relative rounded-full overflow-hidden shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.18)] border border-stone-200/80 bg-black group-hover:scale-105 transition-transform duration-300 ${className}`}
    >
      <img
        src={officialLogoImg}
        alt={alt}
        className="w-full h-full object-cover rounded-full"
        loading="eager"
      />
    </div>
  );
};
