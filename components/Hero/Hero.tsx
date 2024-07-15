'use client';
import { cn } from '@/utils';
import { Container, Background, SleeveText, Rating } from '@/components';
import { useEffect, useState } from 'react';
import { HeroTypes } from '@/types';
import { useThemeSettings } from '@/providers';

export const Hero = ({ data }: { data: HeroTypes }) => {
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const { updateTheme } = useThemeSettings();

  useEffect(() => {
    updateTheme('hasHeroOnPage', true);
  }, []);
  const onLoadedComplete = () => {
    setIsBgLoaded(true);
    updateTheme('isHeroLoaded', true);
  };

  return (
    <section className={cn('hero', isBgLoaded ? 'is-loaded' : '')}>
      <Container>
        {data?.includeRating && isBgLoaded && (
          <span className="hero__rating">
            Rating <Rating score={data?.includeRating} />
          </span>
        )}
        <h1>
          <SleeveText isRevealed={isBgLoaded} text={data.heroTitle} />
        </h1>
        <p>
          <SleeveText isRevealed={isBgLoaded} text={data.heroTagline} />
        </p>
      </Container>
      <Background
        src={data.backgroundImage.node.sourceUrl}
        onLoadedComplete={onLoadedComplete}
        priority
        includeOverlay
      />
    </section>
  );
};
