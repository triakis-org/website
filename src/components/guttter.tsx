import { cn } from '@/lib/classnames';

type Props = {
  readonly className?: string;
};

export const Gutter = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'absolute top-0 block h-full w-10 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-foreground)]/5',
        className,
      )}
    />
  );
};
