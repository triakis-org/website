import { useTranslations } from 'next-intl';
import { Gutter } from '@/components/guttter';
import { Section } from '@/components/section';

type Props = {
  readonly namespace: string;
  readonly index: number;
};

export const HomeContent = ({ namespace, index }: Props) => {
  const intl = useTranslations(namespace);

  return (
    <Section className='h-4/5 items-start'>
      <Gutter className='left-5 md:left-10' />
      <div className='flex max-w-xl flex-col gap-y-4 text-balance md:max-w-2xl'>
        <h3 className='mt-24 pb-4 text-2xl font-black text-balance md:mt-0 md:pb-12 md:text-4xl'>
          <span className='bg-foreground text-background'>{index + 1}.</span>
          <span className='ml-2'>{intl('title')}</span>
        </h3>

        <p className='text-sm md:text-base'>
          <b>{intl('p1.title')}</b> {intl('p1.text')}
        </p>
        <p className='text-sm md:text-base'>
          <b>{intl('p2.title')}</b> {intl('p2.text')}
        </p>
        <p className='text-sm md:text-base'>
          <b>{intl('p3.title')}</b> {intl('p3.text')}
        </p>
      </div>
      <Gutter className='right-5 md:right-10' />
    </Section>
  );
};
