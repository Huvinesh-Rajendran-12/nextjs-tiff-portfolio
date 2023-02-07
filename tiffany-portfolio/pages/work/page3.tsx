
import Link from 'next/link';
import PrimaryButton from '../../components/Button';
import img from 'next/image';
import { useFontStore } from '../../store/store';
import { useEffect } from 'react';

export default function PageThree() {
  const fontStore = useFontStore((state) => state.font)
  console.log(fontStore?.metadata.title.value)
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontStore?.metadata.animation.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontStore?.metadata.title.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontStore?.metadata.content.value ?? ''))
    },[])
  return (
    <div className='flex flex-col'>
      <section className='py-10 lg:pt-[9.88vh] lg:pb-[10vh] px-5 lg:px-[8.89vw]'>
        <div className='flex flex-col justify-center text-center'>
          <h1 className='lg:text-5xl sm:text-3xl uppercase font-title'>Pink4Hope</h1>
          <div className='text-white flex flex-row h-8 justify-center gap-x-2'>
            <div className='uppercase font-content'>Brand Identity</div>
            <div className='vertical-line' />
            <div className='uppercase font-content'>Social Media</div>
          </div>
        </div>
      </section>
      <section className='text-2xl text-center justify-center flex flex-row text-white pt-2'>
        <div className='flex flex-col gap-y-8'>
          <p className='max-w-lg font-content'>
              Your brand needs to reflect who you are and what makes you
              different. That’s why I use design to take your business to new
              levels by creating a visual identity that complements your brand
              values, goals and personality. At visual identity design, I will
              take care of all the hard stuff so you can focus on what&aposs
              important.{' '}
          </p>
          <div className='text-white text-center justify-center'>
            <div className='font-content'>Client: Diamond Platinum</div>
            <div className='font-content'>Designer: Tiffany Chin @ D&P</div>
            <div className='font-content'>Developer: D&P Marketing Team</div>
          </div>
        </div>
      </section>
      <section className='flex flex-row justify-center mx-20'>
        <div className='py-20 space-y-10'>
          <img
            alt=""
            src={
              'https://imgix.cosmicjs.com/abb42a30-8c10-11ed-bac9-7fe1734a16aa-TC1.jpeg'
            }
            className='w-full lg:w-1/2 lg:min-w-[400px] block ml-auto mr-auto'
          />
          <img
            alt=""
            src={
              'https://imgix.cosmicjs.com/8da57640-8beb-11ed-bac9-7fe1734a16aa-PinkOct2.jpeg'
            }
            className='w-full lg:w-1/2 block ml-auto mr-auto'
          />
          <img
            alt=""
            src={
              'https://imgix.cosmicjs.com/92e94550-8beb-11ed-bac9-7fe1734a16aa-PinkOct3.jpg'
            }
            className='w-full lg:w-1/2 block ml-auto mr-auto'
          />
        </div>
      </section>
      <section className='relative h-[90vh]'>
            <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
            <p className='whitespace-nowrap uppercase font-medium text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
              <span className='text-scrolling font-animation'>The Power of Visual Communication</span>
              <span className='text-scrolling font-animation'>The Power of Visual Communication</span>
            </p>
            <p className='whitespace-nowrap uppercase font-medium text-[40vw] md:text-[25vw] lg:text-xxl1 leading-1 lg:leading-[15.28vw]'>
              <span className='reverse text-scrolling font-animation'>The Power of Visual Communication</span>
              <span></span>
            </p>
            </div>
            <div className='absolute top-10 left-0 flex flex-row justify-center w-full h-full'>
              <img alt='' src={'https://imgix.cosmicjs.com/ca11b9e0-8c13-11ed-bac9-7fe1734a16aa-Vitavally1.jpeg'} className='md:w-1/3 h-[80vh] sm:w-1/2  max-h-200px' />
            </div>
      </section>
    </div>
  );
}
