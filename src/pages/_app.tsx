import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalCss } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalCss />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
