
import { useEffect } from 'react';
import { Entry } from 'contentful';
import { TypeFont, TypePages } from '../../interfaces/contentful';
import { getPage4Data, getFontData } from '../api/api';

type PageFourProps = {
  pageFourData: Entry<TypePages>
  fontAPIData: Entry<TypeFont>
}


export default function PageFour({pageFourData,fontAPIData}:PageFourProps) {
  const fontMetadata = fontAPIData.fields
  const pageFourMetadata = pageFourData.fields
  // const pageFourMetadata = usePagesStore((state) => state.pagesData ? state.pagesData[1].metadata : undefined)
  // const pageFivePic = usePagesStore((state) => state.pagesData ? state.pagesData[0].metadata.pic_1 : undefined)
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontMetadata.animationFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontMetadata.titleFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontMetadata.contentFont ?? ''))
    },[])
  return (
    <div className='flex flex-col'>
      <section className='py-10 lg:pt-[9.88vh] lg:pb-[5vh] px-5 lg:px-[8.89vw]'>
        <div className='flex flex-col justify-center text-center space-y-8'>
          <h1 className='lg:text-5xl sm:text-3xl uppercase font-title'>{pageFourMetadata?.title}</h1>
          <div className='text-white flex flex-row h-6 justify-center gap-x-2'>
            <div className='uppercase font-content'>{pageFourMetadata?.pageTag1}</div>
            <div className='vertical-line' />
            <div className='uppercase font-content'>{pageFourMetadata?.pageTag2}</div>
          </div>
        </div>
      </section>
      <section className='text-2xl text-center justify-center flex flex-row text-white pt-2'>
        <div className='flex flex-col gap-y-8'>
          <p className='lg:max-w-xl sm:max-w-sm font-content md:text-lg sm:text-sm'>
              {pageFourMetadata?.pageDescription?.content[0].value}{' '}
          </p>
          <div className='text-white text-center justify-center'>
            <div className='font-content md:text-lg sm:text-sm'>Client: {pageFourMetadata.projectClient}</div>
            <div className='font-content md:text-lg sm:text-sm'>Designer: {pageFourMetadata.projectDesigner}</div>
            <div className='font-content md:text-lg sm:text-sm'>Developer: {pageFourMetadata.projectDeveloper}</div>
          </div>
        </div>
      </section>
      <section className='flex flex-row justify-center sm:mx-5 md:mx-20 lg:mx-80'>
        <div className='py-20 space-y-10'>
           <img
            alt=""
            src={
              pageFourMetadata.pic1?.fields.file.url
            }
            className='w-full block ml-auto mr-auto rounded-md'
            />
          <div className='flex sm:flex-col md:flex-row'>
              <div className='md:w-1/2 w-full'>
                <img alt='' src={pageFourMetadata.pic2?.fields.file.url} className='h-full rounded-md'/>
              </div>
              <div className='md:w-1/2 w-full md:pl-4 sm:mt-10 md:mt-0'>
                <img alt='' src={pageFourMetadata.pic3?.fields.file.url} className='h-full rounded-md'/>
              </div>
            </div>
          {pageFourMetadata.videoUrl? <iframe width={'100%'} height="500"  src={pageFourMetadata.videoUrl}></iframe> : undefined}
          <img
            alt=""
            src={
              pageFourMetadata.pic4?.fields.file.url
            }
            className='w-full block ml-auto mr-auto rounded-md'
            />
          <div className='flex sm:flex-col md:flex-row'>
              <div className='md:w-1/2 w-full'>
                <img alt='' src={pageFourMetadata.pic5?.fields.file.url} className='h-full rounded-md'/>
              </div>
              <div className='md:w-1/2 w-full md:pl-4 sm:mt-10 md:mt-0'>
                <img alt='' src={pageFourMetadata.pic6?.fields.file.url} className='h-full rounded-md'/>
              </div>
            </div>
        </div>
      </section>
      <section className='relative lg:h-[90vh] sm:h-[35vh] md:h-[50vh] sm:mb-10'>
            <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col lg:space-y-4 justify-between lg:block'>
              <p className='whitespace-nowrap uppercase font-medium sm:mt-6 sm:text-[70px] md:text-[18vw] lg:pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
                <span className='text-scrolling font-animation'>{pageFourMetadata.animation1}</span>
                <span>{'  '}</span>
                <span className='text-scrolling font-animation'>{pageFourMetadata.animation1}</span>
              </p>
              <p className='whitespace-nowrap uppercase font-medium sm:text-[70px] md:text-[18vw] lg:mt-16 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'>
                <span className='reverse text-scrolling font-animation'>{pageFourMetadata.animation2}</span>
                <span></span>
              </p>
            </div>
            <div className='absolute top-5 left-0 flex flex-row items-center justify-center w-full h-full'>
              <img alt='' src={pageFourMetadata.nextPagePic?.fields.file.url} className='md:w-1/2 h-[80vh] sm:w-1/2 lg:max-w-[520px]  sm:h-5/6 md:h-5/6'/>
              <div
                className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900  hover:opacity-60'
                >
                <a href="/work/page5">
                  VIEW PROEJCT
                </a>
              </div>
            </div>
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const pageFourData = (await getPage4Data())
  const fontAPIData = (await getFontData())
  return {
    props: {
      pageFourData,
      fontAPIData
    }
  }

}