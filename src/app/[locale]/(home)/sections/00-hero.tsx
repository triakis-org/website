import { useTranslations } from 'next-intl';
import { Gutter } from '@/components/guttter';
import { Section } from '@/components/section';

export const HomeHero = () => {
  const intl = useTranslations('HomeHero');

  return (
    <Section className='flex-row justify-between'>
      <Gutter className='left-5 md:left-10' />
      <div className='flex flex-col gap-y-4 text-balance'>
        <h2 className='mt-24 text-3xl font-black text-balance md:mt-0 md:text-6xl'>
          {intl('title')}
        </h2>

        <p className='mt-8 max-w-xl text-sm md:text-base'>
          <b>{intl('content.p1')}</b>
        </p>
        <p className='max-w-xl text-sm md:text-base'>{intl('content.p2')}</p>

        <a className='group mt-8' href='https://cal.com/pnodet/meet'>
          <button
            className='w-fit bg-foreground px-4 py-2 text-background group-hover:bg-[#0b019c]'
            type='button'
          >
            {'-> '}
            {intl('cta')}
          </button>
        </a>
      </div>
      <Gutter className='right-5 md:right-10' />
    </Section>
  );
};
