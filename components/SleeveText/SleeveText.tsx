import { cn } from '@/utils';
import { useMemo } from 'react';

interface SleeveTextProps {
  text: string;
  isRevealed: boolean;
}

export const SleeveText = ({ text, isRevealed }: SleeveTextProps) => {
  const sleeveTextElement = useMemo(() => {
    const textArray = text.split('');
    return textArray.map((char, index) => {
      if (char === ' ') {
        return (
          <span
            key={`space-${index}`}
            className={cn('sleeveText__space', isRevealed && 'is-revealed')}
          >
            &nbsp;
          </span>
        );
      } else {
        return (
          <span
            key={`char-${index}`}
            className={cn('sleeveText__word', isRevealed && 'is-revealed')}
          >
            {char}
          </span>
        );
      }
    });
  }, [text, isRevealed]);

  return <span className="sleeveText">{sleeveTextElement}</span>;
};
