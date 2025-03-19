import { Logo } from '@/components/triakis';

export const Footer = () => {
  return (
    <footer className='flex w-full flex-col-reverse items-center justify-between border-t border-foreground bg-background px-8 pt-20 pb-12 sm:px-20 md:flex-row'>
      <p className='text-sm md:text-base'>
        © {new Date().getFullYear()} triakis.
        <span className='hidden lg:inline'> All rights reserved.</span>
      </p>
      <div className='flex items-center gap-x-4'>
        <Logo className='size-32' />
        <h1 className='text-3xl font-bold tracking-tighter md:text-5xl'>
          triakis
        </h1>
      </div>
    </footer>
  );
};
