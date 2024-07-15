'use client';
import { cn } from '@/utils';
import Image from 'next/image';
import { useState } from 'react';

interface BackgroundProps {
  onLoadedComplete?: () => void;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  src: string;
  includeOverlay?: boolean;
}
export const Background = ({
  onLoadedComplete,
  priority = false,
  src = '/assets/movie-bg.jpg',
  includeOverlay,
}: BackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={cn('background', isLoaded ? 'is-loaded' : '')}>
      <Image
        className="background__image"
        onLoad={() => {
          onLoadedComplete?.();
          setIsLoaded(true);
        }}
        onError={() => {
          onLoadedComplete?.();
        }}
        priority={priority}
        src={src}
        fill
        alt={''}
      />
      {includeOverlay && <div className="background__overlay" />}
    </div>
  );
};
