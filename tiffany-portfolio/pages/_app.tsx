import '../styles/globals.css';
import '../styles/animation.css';
import '../styles/main.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import smoothscroll from 'smoothscroll-polyfill'
import { useEffect } from 'react';
import { transform } from 'typescript';

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize smooth scrolling
    smoothscroll.polyfill();
  }, []);
  return (
      <div className='bg-black text-white overflow-x-hidden sm:min-h-screen md:h-screen overflow-y-scroll'>
        {/* <Head>
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#33333"/>
          <meta name="description" content="Tiffany C. is a Malaysian creative designer and marketing professional, specialising in graphic design, branding, and social media marketing. With expertise in developing and refining brand identities, she creates promotional materials that communicate her clients' messages effectively, enhancing their online presence and driving revenue growth."></meta>
          <meta property="og:title" content="TIFFANYCFY" />
          <meta property="og:description" content="Tiffany C. is a Malaysian creative designer and marketing professional, specialising in graphic design, branding, and social media marketing. With expertise in developing and refining brand identities, she creates promotional materials that communicate her clients' messages effectively, enhancing their online presence and driving revenue growth." />
        </Head> */}
        <Navbar />
        <div className='' style={{transform: 'translate3d(0px, -1.00669px, 0px)'}}>
          <main>
            <Component {...pageProps} />
          </main>
          <Footer/>
        </div>
      </div>
  );
}