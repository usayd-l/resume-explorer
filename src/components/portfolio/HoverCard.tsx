import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HoverCardProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  contentClassName?: string;
  offset?: { x: number; y: number };
  delay?: number;
}

export const HoverCard: React.FC<HoverCardProps> = ({
  children,
  content,
  className,
  contentClassName,
  offset = { x: 0, y: 8 },
  delay = 100,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      timeoutRef.current = setTimeout(() => setIsOpen(true), delay);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(false);
  };

  const handleTap = () => {
    if (!window.matchMedia('(hover: hover)').matches) {
      setIsTapped((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsTapped(false);
      }
    };

    if (isTapped) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isTapped]);

  const showCard = isOpen || isTapped;

  return (
    <div
      ref={cardRef}
      className={cn('relative inline-block', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTap}
    >
      {children}
      {showCard && (
        <div
          className={cn(
            'hover-card p-4 min-w-[280px] max-w-[340px]',
            contentClassName
          )}
          style={{
            top: `calc(100% + ${offset.y}px)`,
            left: offset.x,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};
