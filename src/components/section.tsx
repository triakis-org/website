import { cn } from '@/lib/classnames';
import type { ComponentProps } from 'react';

export const Section = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <section
      className={cn(
        'relative flex h-svh w-full flex-col items-center justify-center px-8 py-20 md:px-24',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
