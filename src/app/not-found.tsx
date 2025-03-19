import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Not Found',
};

const Page = () => {
  return (
    <div className='flex h-full min-h-screen items-center justify-center'>
      <div className='flex flex-auto flex-col items-center justify-center px-4 text-center sm:flex-row'>
        <h1 className='text-2xl font-extrabold tracking-tight text-foreground sm:mr-6 sm:border-r sm:border-foreground/25 sm:pr-6 sm:text-3xl dark:text-gray-200 sm:dark:border-gray-300/10'>
          404
        </h1>
        <h2 className='mt-2 text-foreground sm:mt-0 dark:text-gray-400'>
          This page could not be found.
        </h2>
      </div>
    </div>
  );
};

export default Page;
