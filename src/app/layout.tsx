import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import '@/styles/globals.css';
import { fonts } from '@/fonts';
import { cn } from '@/lib/classnames';
import { Footer } from '@/components/footer';
import { Nav } from '@/components/nav';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Triakis',
  description:
    'We acquire, manage and develop small established businesses with proven track records and solid cash flow.',
  metadataBase: new URL('https://www.triakis.org'),
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='fr' className={cn('font-mono', fonts)}>
      <body className='isolate'>
        <NextIntlClientProvider>
          <Nav />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
      <Analytics />
    </html>
  );
};

export default RootLayout;
