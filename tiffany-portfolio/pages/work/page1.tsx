
import { useFontStore } from '../../store/store';
import { useEffect } from 'react';
import { getPagesData } from '../../lib/pagesAPI';
import { Font, Page } from '../../interfaces';
import { getFontConfig } from '../../lib/fontAPI';

type PageOneProps = {
  pageOneData: Page[]
  fontAPIData: Font[]
}

export default function PageOne({pageOneData, fontAPIData}:PageOneProps) {
  const pageOneMetadata = pageOneData[0].metadata
  const fontMetadata = fontAPIData[0].metadata
  const fontStore = useFontStore((state) => state.font)
  // const pageOneMetadata = usePagesStore((state) => state.pagesData ? state.pagesData[4].metadata : undefined)
  // const pageTwoPic = usePagesStore((state) => state.pagesData ? state.pagesData[3].metadata.pic_1 : undefined)
  console.log(fontStore?.metadata.title.value)
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontMetadata.animation.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontMetadata?.title.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontMetadata?.content.value ?? ''))
    },[])
  return (
    <div className="flex flex-col">
      <section className='py-10 lg:pt-[9.88vh] lg:pb-[5vh] px-5 lg:px-[8.89vw]'>
        <div className='flex flex-col justify-center text-center space-y-2'>
          <h1 className='lg:text-5xl sm:text-3xl font-title'>{pageOneMetadata?.title}</h1>
          <div className='text-white flex flex-row h-6 justify-center gap-x-2'>
            <div className='uppercase font-content sm:text-lg'>{pageOneMetadata?.tag_1}</div>
            <div className='vertical-line' />
            <div className='uppercase font-content sm:text-lg'>{pageOneMetadata?.tag_2}</div>
          </div>
        </div>
      </section>
      <section className='text-center justify-center flex flex-row text-white'>
        <div className='flex flex-col gap-y-8 mx-10'>
          <p className='lg:max-w-xl sm:max-w-sm font-content md:text-lg sm:text-sm'>
              {pageOneMetadata?.description}{' '}
          </p>
          <div className='text-white text-center justify-center'>
            <div className='font-content md:text-lg sm:text-sm'>Client: {pageOneMetadata?.client}</div>
            <div className='font-content md:text-lg sm:text-sm'>Designer: {pageOneMetadata?.designer}</div>
            <div className='font-content md:text-lg sm:text-sm'>Developer: {pageOneMetadata?.developer}</div>
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
          {pageOneMetadata.vid_1 ? <iframe width={'100%'} height="500"  src={pageOneMetadata.vid_1}></iframe> : undefined}
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
              <p className='whitespace-nowrap uppercase font-medium text-[15vw] md:text-[20vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
                <span className='text-scrolling font-animation uppercase'>{pageOneMetadata?.animation_1}</span>
                <span className='text-scrolling font-animation uppercase'>{pageOneMetadata?.animation_1}</span>
              </p>
              <p className='whitespace-nowrap uppercase font-medium text-[15vw] md:text-[20vw] lg:text-xxl1 lg:mt-16 leading-1 lg:leading-[15.28vw]'>
                <span className='reverse text-scrolling font-animation'>{pageOneMetadata?.animation_2}</span>
                <span></span>
              </p>
            </div>
            <div className='absolute top-10 left-0 flex flex-row justify-center md:w-full w-full h-full'>
              <div className='absolute md:max-w-lg sm:max-w-sm sm:mx-10'>
                <img alt='' src={pageOneMetadata?.next_page_pic.imgix_url} className='h-[80vh] max-h-200px' />
                  <div
                    className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900  hover:opacity-60'
                    >
                    <a href="/work/page2">
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
  // const pageOneData = usePagesStore((state) => state.pagesData ? state.pagesData[4] : undefined)
  const pageOneData = (await getPagesData('page-1'))
  const fontAPIData = (await getFontConfig())
  return {
    props: {
      pageOneData,
      fontAPIData,
    }
  }

}