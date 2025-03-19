import Link from 'next/link';
import { Logo } from '@/components/triakis';

export const Nav = () => {
  return (
    <nav className='fixed z-10 flex w-full items-center justify-between bg-background px-8 py-8 sm:px-20'>
      <Link className='flex items-center gap-x-4' href='/'>
        <Logo className='h-8 w-8' />
        <h1 className='text-2xl font-bold tracking-tighter'>triakis</h1>
      </Link>

      <a className='group' href='https://cal.com/pnodet/meet'>
        <button className='group-hover:underline' type='button'>
          {'-> '}Investir
        </button>
      </a>
    </nav>
  );
};
