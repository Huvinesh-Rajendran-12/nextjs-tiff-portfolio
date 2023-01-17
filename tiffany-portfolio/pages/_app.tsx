import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import '../styles/globals.css';
import '../styles/animation.css';
import '../styles/main.css';
import type { AppProps } from 'next/app';
import extendedTheme from '../theme';
import { Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  );
}
