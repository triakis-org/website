import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import '@/styles/globals.css';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  readonly params: Promise<{ locale: string }>;
}>;

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { locale } = await params;

  let description =
    'We acquire, manage and develop small established businesses with proven track records and solid cash flow.';

  if (locale === 'fr') {
    description =
      'Nous acquérons, gérons et développons des petites entreprises établies avec des antécédents éprouvés et des flux de trésorerie solides.';
  }

  return {
    title: 'Triakis',
    description,
    metadataBase: new URL('https://www.triakis.org'),
  };
};

export const generateStaticParams = () => {
  return routing.locales.map(locale => ({ locale }));
};

const Layout = async ({ children, params }: Props) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return await children;
};

export default Layout;
