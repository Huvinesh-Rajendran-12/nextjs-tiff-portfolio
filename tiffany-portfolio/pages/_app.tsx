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
      <div className='bg-black text-white overflow-x-hidden overflow-y-scroll h-screen'>
        <Navbar/>
        <div className='scroll-container ready'>
          <main>
            <Component {...pageProps} />
          </main>
          <Footer/>
        </div>
      </div>
    </ChakraProvider>
  );
}
