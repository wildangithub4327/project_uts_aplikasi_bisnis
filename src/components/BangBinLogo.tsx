import React from 'react';

interface BangBinLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'badge';
  withTagline?: boolean;
}

export const BangBinLogo: React.FC<BangBinLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  withTagline = true
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
    xl: 'h-24'
  };

  const logoSrc = "/assets/aistudio/IMG_20261017_123444_283.jpg_35be5faf.jpeg";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Mascot Graphic container */}
      <div className="relative overflow-hidden rounded-xl bg-white p-1 border border-emerald-950/5 shadow-xs flex items-center justify-center shrink-0">
        <img
          src={logoSrc}
          alt="Bang Bin Logo"
          className={`${sizeClasses[size]} w-auto object-contain mix-blend-multiply transition-transform hover:scale-105`}
          loading="eager"
        />
      </div>

      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#00635c]">
              bang <span className="text-[#f15a24]">bin</span>
            </span>
          </div>
          {withTagline && (
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#00635c]/80 tracking-wider uppercase mt-0.5">
              Plastic Recycling Solutions
            </span>
          )}
        </div>
      )}
    </div>
  );
};
