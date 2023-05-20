import '../styles/globals.css';
import '../styles/animation.css';
import '../styles/main.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import { Suspense } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense>
      <Head>
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffff"/>
          <meta name="description" content="Tiffany C. is a Malaysian creative designer and marketing professional, specialising in graphic design, branding, and social media marketing. With expertise in developing and refining brand identities, she creates promotional materials that communicate her clients' messages effectively, enhancing their online presence and driving revenue growth."></meta>
          <meta property="og:title" content="TIFFANYCFY" />
          <meta property="og:description" content="Tiffany C. is a Malaysian creative designer and marketing professional, specialising in graphic design, branding, and social media marketing. With expertise in developing and refining brand identities, she creates promotional materials that communicate her clients' messages effectively, enhancing their online presence and driving revenue growth." />
      </Head>
      <div className='bg-black text-white overflow-x-hidden overflow-y-scroll h-screen'>
        <Navbar />
        <div className='scroll-container scroll-smooth ready'>
          <main>
            <Component {...pageProps} />
          </main>
          <Footer/>
        </div>
      </div>
    </Suspense>
  );
}