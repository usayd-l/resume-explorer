import React from 'react';
import { Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoPlaceholderProps {
  name: string;
  src?: string;
  alt?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({
  name,
  src,
  alt,
  className,
  size = 'md',
}) => {
  if (src) {
    return (
      <img
        src={src}
        alt={alt || name}
        className={cn(sizeClasses[size], 'object-contain rounded', className)}
      />
    );
  }

  // Generate initials from name
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        sizeClasses[size],
        'flex items-center justify-center rounded bg-secondary text-secondary-foreground font-medium text-xs',
        className
      )}
      aria-label={name}
    >
      {initials || <Building2 className={iconSizes[size]} />}
    </div>
  );
};
