
import PrimaryButton from '../../components/Button';
import Link from 'next/link';
import img from 'next/image';
import { useFontStore, usePagesStore } from '../../store/store';
import { useEffect } from 'react';

export default function PageOne() {
  const fontStore = useFontStore((state) => state.font)
  const pageOneMetadata = usePagesStore((state) => state.pagesData ? state.pagesData[4].metadata : undefined)
  const pageTwoPic = usePagesStore((state) => state.pagesData ? state.pagesData[3].metadata.pic_1 : undefined)
  console.log(fontStore?.metadata.title.value)
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontStore?.metadata.animation.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontStore?.metadata.title.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontStore?.metadata.content.value ?? ''))
    },[])
  return (
    <div className="flex flex-col">
      <section className='py-10 lg:pt-[9.88vh] lg:pb-[10vh] px-5 lg:px-[8.89vw]'>
        <div className='flex flex-col justify-center text-center space-y-2'>
          <h1 className='lg:text-5xl sm:text-3xl font-title'>{pageOneMetadata?.title}</h1>
          <div className='text-white flex flex-row h-6 justify-center gap-x-2'>
            <div className='uppercase font-content'>{pageOneMetadata?.tag_1}</div>
            <div className='vertical-line' />
            <div className='uppercase font-content'>{pageOneMetadata?.tag_2}</div>
          </div>
        </div>
      </section>
      <section className='text-2xl text-center justify-center flex flex-row text-white pt-2'>
        <div className='flex flex-col gap-y-8'>
          <p className='max-w-lg font-content'>
              {pageOneMetadata?.description}{' '}
          </p>
          <div className='text-white text-center justify-center'>
            <div className='font-content'>Client: Diamond Platinum</div>
            <div className='font-content'>Designer: Tiffany Chin @ D&P</div>
            <div className='font-content'>Developer: D&P Marketing Team</div>
          </div>
        </div>
      </section>
      <section className='flex flex-row justify-center mx-20 lg:mx-80'>
        <div className='py-20 space-y-10'>
          <img
            alt=""
            src={
              pageOneMetadata?.pic_1.imgix_url
            }
            className='w-full block ml-auto mr-auto'
            />
          <div className='flex'>
            <div className='w-1/2 p-1'>
              <img alt='' src={pageOneMetadata?.pic_2.imgix_url} className='h-full'/>
            </div>
            <div className='w-1/2 p-1'>
              <img alt='' src={pageOneMetadata?.pic_3.imgix_url} className='h-full'/>
            </div>
          </div>
          {pageOneMetadata?.vid_1 ?? <video src={pageOneMetadata?.vid_1}></video>}
          <img
            alt=""
            src={
              pageOneMetadata?.pic_4.imgix_url
            }
            className='w-full block ml-auto mr-auto'
            />
          <div className='flex'>
            <div className='w-1/2 p-1'>
              <img alt='' src={pageOneMetadata?.pic_5.imgix_url} className='h-full'/>
            </div>
            <div className='w-1/2 p-1'>
              <img alt='' src={pageOneMetadata?.pic_6.imgix_url} className='h-full'/>
            </div>
          </div>
        </div>
      </section>
      <section className='relative h-[90vh]'>
            <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
              <p className='whitespace-nowrap uppercase font-medium text-[30vw] md:text-[20vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
                <span className='text-scrolling font-animation uppercase'>{pageOneMetadata?.animation_1}</span>
                <span className='text-scrolling font-animation uppercase'>{pageOneMetadata?.animation_1}</span>
              </p>
              <p className='whitespace-nowrap uppercase font-medium text-[40vw] md:text-[20vw] lg:text-xxl1 lg:mt-16 leading-1 lg:leading-[15.28vw]'>
                <span className='reverse text-scrolling font-animation'>{pageOneMetadata?.animation_2}</span>
                <span></span>
              </p>
            </div>
            <div className='absolute top-10 left-0 flex flex-row justify-center w-full h-full'>
              <div className='absolute max-w-lg'>
                <img alt='' src={pageTwoPic?.imgix_url} className=' h-[80vh] max-h-200px' />
                  <div
                    className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900  hover:opacity-60'
                    >
                    <Link href="/work/page2">
                      VIEW PROEJCT
                    </Link>
                  </div>
              </div>
            </div>
      </section>
    </div>
  );
}
