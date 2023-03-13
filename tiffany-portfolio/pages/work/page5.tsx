
import PrimaryButton from '../../components/Button';
import Link from 'next/link';
import img from 'next/image';
import { useFontStore, usePagesStore } from '../../store/store';
import { useEffect } from 'react';
import { getPagesData } from '../../lib/pagesAPI';
import { Font, Page } from '../../interfaces';
import { getFontConfig } from '../../lib/fontAPI';

type PageFiveProps = {
  pageFiveData: Page[]
  fontAPIData: Font[]
}

export default function PageFive({pageFiveData,fontAPIData}:PageFiveProps) {
  const fontMetadata = fontAPIData[0].metadata
  const pageFiveMetadata = pageFiveData[0].metadata
  const fontStore = useFontStore((state) => state.font)
  // const pageFiveMetadata = usePagesStore((state) => state.pagesData ? state.pagesData[0].metadata : undefined)
  // const pageOnePic = usePagesStore((state) => state.pagesData ? state.pagesData[4].metadata.pic_1 : undefined)
  console.log(fontStore?.metadata.title.value)
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontMetadata.animation.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontMetadata.title.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontMetadata.content.value ?? ''))
    },[])
  return (
    <div className='flex flex-col'>
      <section className='py-10 lg:pt-[9.88vh] lg:pb-[5vh] px-5 lg:px-[8.89vw]'>
        <div className='flex flex-col justify-center text-center sapce-y-2'>
          <h1 className='lg:text-5xl sm:text-3xl uppercase font-title'>{pageFiveMetadata?.title}</h1>
          <div className='text-white flex flex-row h-6 justify-center gap-x-2'>
            <div className='uppercase font-content'>{pageFiveMetadata?.tag_1}</div>
            <div className='vertical-line' />
            <div className='uppercase font-content'>{pageFiveMetadata?.tag_2}</div>
          </div>
        </div>
      </section>
      <section className='text-2xl text-center justify-center flex flex-row text-white pt-2'>
        <div className='flex flex-col gap-y-8'>
          <p className='lg:max-w-xl sm:max-w-sm font-content md:text-lg sm:text-sm'>
              {pageFiveMetadata?.description}{' '}
          </p>
          <div className='text-white text-center justify-center'>
            <div className='font-content md:text-lg sm:text-sm'>Client: {pageFiveMetadata?.client}</div>
            <div className='font-content md:text-lg sm:text-sm'>Designer: {pageFiveMetadata?.designer}</div>
            <div className='font-content md:text-lg sm:text-sm'>Developer: {pageFiveMetadata?.developer}</div>
          </div>
        </div>
      </section>
            <section className='flex flex-row justify-center mx-20 lg:mx-80'>
        <div className='py-20 space-y-10'>
           <img
            alt=""
            src={
              pageFiveMetadata?.pic_1.imgix_url
            }
            className='w-full block ml-auto mr-auto'
            />
          <div className='flex'>
              <div className='w-1/2 p-1'>
                <img alt='' src={pageFiveMetadata?.pic_2.imgix_url} className='h-full'/>
              </div>
              <div className='w-1/2 p-1'>
                <img alt='' src={pageFiveMetadata?.pic_3.imgix_url} className='h-full'/>
              </div>
            </div>
          {pageFiveMetadata.vid_1 ? <iframe width={'100%'} height="500"  src={pageFiveMetadata.vid_1}></iframe> : undefined}
          <img
            alt=""
            src={
              pageFiveMetadata?.pic_4.imgix_url
            }
            className='w-full block ml-auto mr-auto'
            />
          <div className='flex'>
              <div className='w-1/2 p-1'>
                <img alt='' src={pageFiveMetadata?.pic_5.imgix_url} className='h-full'/>
              </div>
              <div className='w-1/2 p-1'>
                <img alt='' src={pageFiveMetadata?.pic_6.imgix_url} className='h-full'/>
              </div>
            </div>
        </div>
      </section>
      <section className='relative h-[90vh]'>
            <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
            <p className='whitespace-nowrap uppercase font-medium text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
              <span className='text-scrolling font-animation'>{pageFiveMetadata?.animation_1}</span>
              <span className='text-scrolling font-animation'>{pageFiveMetadata?.animation_1}</span>
            </p>
            <p className='whitespace-nowrap uppercase font-medium text-[40vw] md:text-[25vw] lg:text-xxl1 leading-1 lg:leading-[15.28vw]'>
              <span className='reverse text-scrolling font-animation'>{pageFiveMetadata?.animation_2}</span>
              <span></span>
            </p>
            </div>
            <div className='absolute top-10 left-0 flex flex-row justify-center w-full h-full'>
              <div className='absolute md:max-w-lg sm:max-w-sm sm:mx-10'>
                <img alt='' src={pageFiveMetadata?.next_page_pic.imgix_url} className=' h-[80vh] max-h-200px' />
                  <div
                    className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900  hover:opacity-60'
                    >
                    <a href="/work/page1">
                      VIEW PROEJCT
                    </a>
                  </div>
              </div>
            </div>
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const pageFiveData = (await getPagesData('page-5'))
  const fontAPIData = (await getFontConfig())
  return {
    props: {
      pageFiveData,
      fontAPIData
    }
  }

}