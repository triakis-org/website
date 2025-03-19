import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

// eslint-disable-next-line import/no-default-export
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, unicorn/no-await-expression-member, @typescript-eslint/no-unsafe-member-access
    messages: (await import(`./${locale}.json`)).default,
  };
});
