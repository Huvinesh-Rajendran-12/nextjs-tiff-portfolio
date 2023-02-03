import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import '../styles/animation.css';
import '../styles/main.css';
import type { AppProps } from 'next/app';
import extendedTheme from '../theme';
import { Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getFontConfig } from '../lib/fontAPI';
import { useFontStore } from '../store/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className='bg-black text-white overflow-x-hidden overflow-y-scroll h-screen'>
        <Navbar/>
        <div className='scroll-container ready'>
          <main>
            <Component {...pageProps} />
          </main>
          <Footer/>
        </div>
      </div>
  );
}
