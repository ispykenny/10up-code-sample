'use client';

import { Container, SleeveText, ReviewsCard } from '@/components';
import { useThemeSettings } from '@/providers';
import { PostTypes } from '@/types';
import { cn } from '@/utils';
import { useEffect, useMemo, useRef, useState } from 'react';

interface ReviewProps {
  reviews: PostTypes[];
  isLoaded: boolean;
}

export const ReviewsClient = ({ reviews, isLoaded }: ReviewProps) => {
  const [reviewTitle, setReviewTitle] = useState(false);
  const { isHeroLoaded } = useThemeSettings();

  // Set the review title to be revealed when the hero image is loaded
  // and or when the hero image is on the page
  useEffect(() => {
    if (isHeroLoaded || isLoaded) {
      setReviewTitle(true);
    }
  }, [isHeroLoaded, isLoaded]);

  // using memo to prevent re-rendering of the reviews when useEffect rerenders component
  const ReviewItems = useMemo(() => {
    return reviews.map((review) => {
      return <ReviewsCard key={review.title} data={review} />;
    });
  }, [reviews]);

  return (
    <div className="reviews">
      <Container>
        <h2 className="section-title">
          <SleeveText text="Reviews" isRevealed={reviewTitle} />
        </h2>
        <div
          className={cn('reviews__container', reviewTitle ? 'is-loaded' : '')}
        >
          {ReviewItems}
        </div>
      </Container>
    </div>
  );
};
