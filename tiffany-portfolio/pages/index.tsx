
import { useEffect } from 'react';
// import { getHomePageData } from '../lib/homeAPI';
import { getHomePageData, getFontData } from './api/api'
import { Entry } from 'contentful';
import { TypeFont, TypeHomepage } from '../interfaces/contentful';

type HomePageProps = {
  fontAPIData: Entry<TypeFont>
  HomePageData: Entry<TypeHomepage>
}

export default function HomePage({fontAPIData,HomePageData}:HomePageProps){
  const HomePageMetadata = HomePageData.fields
  const fontAPIMetadata = fontAPIData.fields
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) =>  e.style.setProperty('--font-animation', fontAPIMetadata.animationFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontAPIMetadata.titleFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontAPIMetadata.contentFont ?? ''))
    },[])
    return (
      <div className='flex flex-col'>
          <section className='relative lg:h-[90vh] sm:h-[35vh] md:h-[50vh]'>
            <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col lg:space-y-4 justify-between lg:block'>
              <p className='whitespace-nowrap uppercase font-medium sm:mt-6 sm:text-[70px] md:text-[18vw] lg:pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
                <span className='text-scrolling font-animation'>{HomePageMetadata.animation1}</span>
                <span>{'  '}</span>
                <span className='text-scrolling font-animation'>{HomePageMetadata.animation1}</span>
              </p>
              <p className='whitespace-nowrap uppercase font-medium sm:text-[70px] md:text-[18vw] lg:mt-16 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'>
                <span className='reverse text-scrolling font-animation'>{HomePageMetadata.animation2}</span>
                <span></span>
              </p>
            </div>
            <div className='absolute top-5 left-0 flex flex-row items-center justify-center w-full h-full'>
              <img alt='' src={HomePageMetadata.newProjectImage?.fields.file.url} className='md:w-1/2 h-[80vh] sm:w-1/2 lg:max-w-[520px]  sm:h-5/6 md:h-5/6'/>
            </div>
          </section>
          <section className='mx-auto sm:mx-20 mt-20 mb-10'>
            <div
              className='justify-center flex items-center sm:flex-col md:flex-row sm:gap-y-1 md:gap-x-11'
            >
              <img alt='' src={HomePageMetadata.logo?.fields.file.url} className='w-1/12 md:min-w-[15vw] sm:min-w-[70px]' />
              <div className='gap-y-6 flex flex-col'>
                <div className='text-white lg:max-w-lg'>
                  <i className='text-center text-xl lg:text-2xl font-content'>
                    {HomePageMetadata.description?.content?.[0].content?.[0].value}
                  </i>
                </div>
                <div className='text-white lg:max-w-lg'>
                  <p className='lg:text-2xl font-content'>
                    {HomePageMetadata.description?.content?.[1].content?.[0].value}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className='lg:mt-[7.90vh] px-3.5 lg:px-[0.97vw]'>
            <div className='py-2 mt-10'>
              <h1 className='md:text-5xl sm:text-2xl flex justify-center text-white font-title'>SELECTED WORK</h1>
            </div>
            <div className='mt-6'>
              <div className='flex flex-wrap mx-20'>
                <div className='md:w-1/2 w-full gap-x-6 pt-2'>
                  <div>
                    <div className='relative'>
                      <img
                        src={HomePageMetadata.page1Pic?.fields.file.url}
                        className=''
                        alt='' />
                      <div
                        className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900 hover:opacity-60'
                        >
                        <a href="/work/page1">
                          VIEW PROJECT
                        </a>
                      </div>
                    </div>
                    <div className='py-4'>
                      <div className='text-white font-content uppercase mt-4'>{HomePageMetadata.page1PicTitle}</div>
                      <div className='text-white font-content'>{HomePageMetadata.page1PicYear}</div>
                    </div>
                  </div>
                  <div>
                    <div className='relative'>
                      <img alt='' src={HomePageMetadata.page2Pic?.fields.file.url} className='w-full' />
                      <div
                        className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900  hover:opacity-60'
                      >
                        <a href="/work/page2">
                          VIEW PROJECT
                        </a>
                      </div>
                    </div>
                    <div className='py-4'>
                      <div className='text-white font-content'>{HomePageMetadata.page2PicTitle}</div>
                      <div className='text-white font-content'>{HomePageMetadata.page2PicYear}</div>
                    </div>
                  </div>
                </div>
                <div className='md:w-1/2 w-full gap-x-2 md:pl-8'>
                  <div>
                    <div className='relative'>
                      <img alt='' src={HomePageMetadata.page3Pic?.fields.file.url} className='w-full' />
                      <div
                        className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900 hover:opacity-60'
                      >
                        <a href="/work/page3">
                          VIEW PROJECT
                        </a>
                      </div>
                    </div>
                    <div className='py-4'>
                      <div className='text-white font-content'>{HomePageMetadata.page3PicTitle}</div>
                      <div className='text-white font-content'>{HomePageMetadata.page3PicYear}</div>
                    </div>
                  </div>
                  <div>
                    <div className='relative'>
                      <img alt='' src={HomePageMetadata.page4Pic?.fields.file.url} className='w-full' />
                      <div
                        className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900 hover:opacity-60'
                      >
                        <a href="/work/page4">
                          VIEW PROJECT
                        </a>
                      </div>
                    </div>
                    <div className='py-4'>
                      <div className='text-white font-content'>{HomePageMetadata.page4PicTitle}</div>
                      <div className='text-white font-content'>{HomePageMetadata.page4PicYear}</div>
                    </div>
                  </div>
                </div>
                <div className='pt-2'>
                  <div className='relative'>
                    <img alt='' src={HomePageMetadata.page5Pic?.fields.file.url} />
                    <div
                      className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900 hover:opacity-60'
                    >
                      <a href="/work/page5">
                        VIEW PROJECT
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className='text-white font-conten mt-4'>{HomePageMetadata.page5PicTitle}</div>
                    <div className='text-white font-content'>{HomePageMetadata.page5PicYear}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='py-10'>
            <div className='py-2'>
              <div className='text-center w-full md:text-5xl sm:text-2xl items-center justify-center flex flex-row'>
                <p className='max-w-xl font-title uppercase'>{HomePageMetadata.marketingPhrase}</p>
              </div>
            </div>
            <div
              className='flex md:flex-row sm:flex-col justify-center py-10 items-center gap-x-4 sm:space-y-4'
            >
              <img alt='' src={HomePageMetadata.userProfilePic?.fields.file.url} className='w-1/4 sm:w-1/3' />
              <div className='justify-center md:text-left text-center sm:space-y-2'>
                <div className='font-bold text-xl text-white font-title'>{HomePageMetadata.userName}</div>
                <div className='flex justify-center sm:flex-col items-center md:flex-row md:space-x-2 md:h-3'>
                  <div className='text-white text-md font-content uppercase' >{HomePageMetadata.tag1}</div>
                  <div className='vertical-line'></div>
                  <div className='text-white text-md font-content uppercase'>{HomePageMetadata.tag2}</div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='mt-10'>
              <div className='py-2'>
                <div className='relative'>
                  <img alt='' src={HomePageMetadata.endPic?.fields.file.url} className='w-full max-h-[600px]' />
                  <div
                    className='absolute flex w-full h-full justify-center items-center top-0 left-0'
                  >
                    <div className='flex overflow-hidden w-full'>
                      <div  className='scrollTextContainerRightToLeft'>
                        <div className='uppercase font-medium font-animation text-[12vw] md:text-[15vw] pb-8 leading-1'>
                          {HomePageMetadata.animation3}
                        </div>
                        <div className='uppercase font-medium font-animation text-[12vw] md:text-[15vw] pb-8 leading-1'>
                          {HomePageMetadata.animation3}
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
  const fontAPIData = (await getFontData())
  const HomePageData = (await getHomePageData())
  return {
    props: {
      fontAPIData,
      HomePageData,
    }
  }

}