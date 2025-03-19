import { HomeHero } from '@/app/[locale]/(home)/sections/00-hero';
import { HomeContent } from '@/app/[locale]/(home)/sections/01-content';
import { HomeInvesting } from '@/app/[locale]/(home)/sections/02-investing';

const Page = () => {
  return (
    <main className='flex flex-col items-center justify-center'>
      <HomeHero />
      <HomeContent namespace='HomeAcquire' index={0} />
      <HomeContent namespace='HomeManaging' index={1} />
      <HomeContent namespace='HomeGrowth' index={2} />
      <HomeInvesting />
    </main>
  );
};

export default Page;
