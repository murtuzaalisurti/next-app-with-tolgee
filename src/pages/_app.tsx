/* eslint-disable @typescript-eslint/no-var-requires */
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { TolgeeProvider } from '@tolgee/react';

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;

function MyApp({ Component, pageProps, locales }: AppProps & { locales: any }) {
  const router = useRouter();
  return (
    <TolgeeProvider
      forceLanguage={router.locale}
      apiKey={apiKey}
      apiUrl={apiUrl}
      wrapperMode="invisible"
      staticData={{
        en: () => import('../i18n/en.json'),
        hi: () => import('../i18n/hi.json'),
        ...locales,
      }}
      // remove this to enable language auto detection
      enableLanguageDetection={false}
      loadingFallback={<div>Loading...</div>}
    >
      <Component {...pageProps} />
    </TolgeeProvider>
  );
}

// this is an easiest way how to get translations in SSR
// if you want to optimize further, you can use per page getStaticProps etc.
MyApp.getInitialProps = async (context: any) => {
  const locale = context.router.locale;
  const result = {
    locales: {
      // get translations for current locale
      [locale]: await import(`../i18n/${locale}.json`),
    },
  };
  return result;
};

export default MyApp;
