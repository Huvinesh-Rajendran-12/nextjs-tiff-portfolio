
import Link from 'next/link';
import { useFontStore, useHomePageStore, usePagesStore } from '../store/store';
import { getFontConfig } from '../lib/fontAPI';
import { useEffect } from 'react';
import { Font, type HomePage, Page } from '../interfaces';
import { getHomePageData } from '../lib/homeAPI';
import { getPagesData } from '../lib/pagesAPI';

type HomePageProps = {
  fontAPIData: Font[]
  HomePageData: HomePage[]
  PagesData: Page[]
}

export default function HomePage({fontAPIData,HomePageData, PagesData}:HomePageProps){
  const addFont = useFontStore((state) => state.addFont)
  const addHomePageData = useHomePageStore((state) => state.addHomePageData)
  const addPagesData = usePagesStore((state) => state.addPagesData)
  addFont(fontAPIData[0])
  addHomePageData(HomePageData[0])
  addPagesData(PagesData)
  const fontMetadata = useFontStore((state) => state.font?.metadata)
  const HomePageMetadata = useHomePageStore((state) => state.HomePageData?.metadata)
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) =>  e.style.setProperty('--font-animation', fontMetadata?.animation.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontMetadata?.title.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontMetadata?.content.value ?? ''))
    },[])
    return (
      <div className='flex flex-col'>
          <section className='relative h-[90vh]'>
            <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
            <p className='whitespace-nowrap uppercase font-medium text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
              <span className='text-scrolling font-animation'>{HomePageMetadata?.animation_1}</span>
              <span className='text-scrolling font-animation'>{HomePageMetadata?.animation_1}</span>
            </p>
            <p className='whitespace-nowrap uppercase font-medium text-[40vw] pt-6 md:text-[25vw] lg:text-xxl1 leading-1 lg:leading-[15.28vw]'>
              <span className='reverse text-scrolling font-animation'>{HomePageMetadata?.animation_2}</span>
              <span></span>
            </p>
            </div>
            <div className='absolute top-10 left-0 flex flex-row justify-center w-full h-full'>
              <img alt='' src={HomePageMetadata?.new_project_pic.imgix_url} className='md:w-1/3 h-[80vh] sm:w-1/2  max-h-200px' />
            </div>
          </section>
          <section className='mx-auto sm:mx-20 mt-20 mb-10'>
            <div
              className='justify-center flex items-center sm:flex-col md:flex-row sm:gap-y-1 md:gap-x-11'
            >
              <img alt='' src={HomePageMetadata?.logo.imgix_url} className='w-1/12 md:min-w-[15vw] sm:min-w-[70px]' />
              <div className='gap-y-6 flex flex-col'>
                <div className='text-white lg:max-w-lg'>
                  <i className='text-center text-xl lg:text-2xl font-content'>
                    “In a world where everyone seems to be doing the same thing, it’s time to stand out.”
                  </i>
                </div>
                <div className='text-white lg:max-w-lg'>
                  <p className='lg:text-2xl font-content'>
                    Your brand needs to reflect who you are and what makes you different. That’s why we use design to take your business to new levels by creating a visual identity that complements your brand values, goals and personality.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className='lg:mt-[7.90vh] px-3.5 lg:px-[0.97vw]'>
            <div className='py-2 mt-10'>
              <h1 className='text-5xl flex justify-center text-white font-title'>SELECTED WORK</h1>
            </div>
            <div className=''>
              <div className='flex flex-wrap mx-20'>
                <div className='lg:w-1/2 w-full gap-x-6 pt-2'>
                    <div className='relative'>
                      <img
                        src={HomePageMetadata?.page_1_pic.imgix_url}
                        className=''
                        alt='' />
                      <div
                        className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900 hover:opacity-60'
                      >
                        <Link href="/work/page1" scroll={true}>
                          VIEW PROJECT
                        </Link>
                      </div>
                    </div>
                    <div className='text-white font-content uppercase'>{HomePageMetadata?.page_1_pic_title}</div>
                    <div className='text-white font-content'>{HomePageMetadata?.page_1_pic_year}</div>

                  <div>
                    <div className='relative'>
                      <img alt='' src={HomePageMetadata?.page_2_pic.imgix_url} className='w-full' />
                      <div
                        className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900  hover:opacity-60'
                      >
                        <Link href="/work/page2" scroll={true}>
                          VIEW PROEJCT
                        </Link>
                      </div>
                    </div>
                    <div className='text-whit font-content'>{HomePageMetadata?.page_2_pic_title}</div>
                    <div className='text-white font-content'>{HomePageMetadata?.page_2_pic_year}</div>
                  </div>
                </div>
                <div className='lg:w-1/2 w-full gap-x-2 lg:pl-8'>
                  <div>
                    <div className='relative'>
                      <img alt='' src={HomePageMetadata?.page_3_pic.imgix_url} className='w-full' />
                      <div
                        className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900 hover:opacity-60'
                      >
                        <Link href="/work/page3" scroll={true}>
                          VIEW PROJECT
                        </Link>
                      </div>
                    </div>
                    <div className='py-3'>
                      <div className='text-white font-content'>{HomePageMetadata?.page_3_pic_title}</div>
                      <div className='text-white font-content'>{HomePageMetadata?.page_3_pic_year}</div>
                    </div>
                  </div>
                  <div>
                    <div className='relative'>
                      <img alt='' src={HomePageMetadata?.page_4_pic.imgix_url} className='w-full' />
                      <div
                        className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900 hover:opacity-60'
                      >
                        <Link href="/work/page4" scroll={true}>
                          VIEW PROJECT
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className='text-white font-content'>{HomePageMetadata?.page_4_pic_title}</div>
                      <div className='text-white font-content'>{HomePageMetadata?.page_4_pic_year}</div>
                    </div>
                  </div>
                </div>
                <div className='pt-2'>
                  <div className='relative'>
                    <img alt='' src={HomePageMetadata?.page_5_pic.imgix_url} />
                    <div
                      className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900 hover:opacity-60'
                    >
                      <Link href="/work/page5" scroll={true}>
                        VIEW PROJECT
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className='text-white font-content'>{HomePageMetadata?.page_5_pic_title}</div>
                    <div className='text-white font-content'>{HomePageMetadata?.page_1_pic_year}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='py-10'>
            <div className='py-2'>
              <div className='text-center w-full text-5xl items-center justify-center flex flex-row'>
                <p className='max-w-xl font-title uppercase'>BASED IN KUALA LUMPUR, MALAYSIA. AVAILABLE WORLDWIDE.</p>
              </div>
            </div>
            <div
              className='flex flex-row justify-center py-10 items-center gap-x-4'
            >
                <img alt='' src={'https://imgix.cosmicjs.com/79675130-8e52-11ed-bac9-7fe1734a16aa-Pic.jpg'} className='w-1/4' />
              <div className='justify-center text-center'>
                <div className='font-bold text-lg text-white font-content'>Tiffany Chin</div>
                <div className='justify-center items-center'>
                  <div className='text-white text-md font-content uppercase' >INDEPENDENT DESIGNER</div>
                  <div className='text-white text-md font-content uppercase'>DIGITAL MARKETER</div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='mt-10'>
              <div className='py-2'>
                <div className='relative'>
                  <img alt='' src={HomePageMetadata?.end_pic.imgix_url} className='w-full' />
                  <div
                    className='absolute flex w-full h-full justify-center items-center top-0 left-0'
                  >
                    <div className='flex overflow-hidden w-full'>
                      <div  className='scrollTextContainerRightToLeft'>
                        <div className='uppercase font-medium font-animation text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'>
                          {HomePageMetadata?.animation_3}
                        </div>
                        <div className='uppercase font-medium font-animation text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'>
                          {HomePageMetadata?.animation_3}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
)}

export const getStaticProps = async () => {
  const fontAPIData = (await getFontConfig())
  const HomePageData = (await getHomePageData())
  const PagesData = (await getPagesData())
  return {
    props: {
      fontAPIData,
      HomePageData,
      PagesData
    }
  }

}