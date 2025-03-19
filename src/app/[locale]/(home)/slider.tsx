/* eslint-disable sonarjs/no-nested-functions */
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/classnames';

const SLIDER_ITEMS = [
  {
    id: 1,
    title: 'Acquisition',
    content:
      "Nous proposons des évaluations équitables et des structures de transactions flexibles pour les propriétaires d'entreprises en transition.",
    imageHref: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0',
  },
  {
    id: 2,
    title: 'Exploitation',
    content:
      "Nos opérateurs expérimentés préservent la culture de l'entreprise tout en mettant en œuvre des améliorations opérationnelles.",
    imageHref: 'https://images.unsplash.com/photo-1550025005-05b9002486c5',
  },
  {
    id: 3,
    title: 'Croissance',
    content:
      'Nous mettons en œuvre des stratégies éprouvées pour augmenter les revenus, améliorer les marges et créer de la valeur à long terme.',
    imageHref: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74',
  },
] as const;

type SliderItem = (typeof SLIDER_ITEMS)[number];

const HomeSliderItem = ({
  item,
  isActive,
}: {
  readonly item: SliderItem;
  readonly isActive: boolean;
}) => {
  return (
    <div
      className={cn(
        'absolute size-full object-cover',
        isActive ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div className='relative aspect-video h-1/2 w-full'>
        <Image
          fill
          src={item.imageHref}
          alt={item.title}
          className={cn(
            'size-full object-cover',
            isActive ? 'opacity-100' : 'opacity-0',
          )}
        />
      </div>
      <div
        className={cn(
          'flex size-full flex-col gap-y-12 bg-foreground p-4 text-background transition-all duration-250 ease-in-out-quart',
          isActive ? 'opacity-100' : 'opacity-0',
        )}
      >
        <div className='flex items-center gap-x-2'>
          <p className='text-2xl font-bold'>{item.id}.</p>
          <p className='text-2xl font-bold'>{item.title}</p>
        </div>
        <p>{item.content}</p>
      </div>
    </div>
  );
};

const SLIDER_DELAY = 5000;

export const HomeSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState<SliderItem>(SLIDER_ITEMS[0]);
  const intervalsRef = useRef<{
    main: NodeJS.Timeout;
  } | null>(null);

  useEffect(() => {
    const startIntervals = () => {
      const mainInterval = setInterval(() => {
        setActiveItem(prev => {
          const nextItem = SLIDER_ITEMS.find(item => item.id === prev.id + 1);

          if (!nextItem) {
            return SLIDER_ITEMS[0];
          }

          return nextItem;
        });
      }, SLIDER_DELAY);

      intervalsRef.current = { main: mainInterval };
    };

    const clearIntervals = () => {
      if (intervalsRef.current) {
        clearInterval(intervalsRef.current.main);
        intervalsRef.current = null;
      }
    };

    if (!isHovered) {
      startIntervals();
    }

    return () => {
      clearIntervals();
    };
  }, [isHovered]);

  return (
    <div
      className='flex size-full flex-col gap-y-12 bg-foreground text-background'
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {SLIDER_ITEMS.map(item => (
        <HomeSliderItem
          key={item.id}
          item={item}
          isActive={activeItem.id === item.id}
        />
      ))}
    </div>
  );
};
