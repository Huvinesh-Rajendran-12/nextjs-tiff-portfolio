import '../styles/globals.css';
import '../styles/animation.css';
import '../styles/main.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className='bg-black text-white overflow-x-hidden overflow-y-scroll h-screen'>
        <Navbar />
        <div className='scroll-container scroll-smooth ready'>
          <main>
            <Component {...pageProps} />
          </main>
          <Footer/>
        </div>
      </div>
  );
}