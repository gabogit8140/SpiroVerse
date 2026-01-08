
import React, { useId } from 'react';

export const AppIcon = ({ className = "w-8 h-8" }: { className?: string }) => {
  const rawId = useId();
  // Create a unique ID safe for url() references (removing colons for compatibility)
  const gradientId = `icon-gradient-${rawId.replace(/:/g, '')}`;

  return (
    <svg 
      viewBox="0 0 512 512" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <g transform="translate(256, 256)">
        <ellipse cx="0" cy="0" rx="200" ry="80" stroke={`url(#${gradientId})`} strokeWidth="40" transform="rotate(0)"/>
        <ellipse cx="0" cy="0" rx="200" ry="80" stroke={`url(#${gradientId})`} strokeWidth="40" transform="rotate(60)"/>
        <ellipse cx="0" cy="0" rx="200" ry="80" stroke={`url(#${gradientId})`} strokeWidth="40" transform="rotate(120)"/>
        <circle cx="0" cy="0" r="40" fill={`url(#${gradientId})`}/>
      </g>
    </svg>
  );
};
