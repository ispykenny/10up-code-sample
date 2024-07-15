import { cn } from '@/utils';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Container = ({
  children,
  size = 'lg',
  className,
}: ContainerProps) => {
  return <div className={cn('container', size, className)}>{children}</div>;
};
