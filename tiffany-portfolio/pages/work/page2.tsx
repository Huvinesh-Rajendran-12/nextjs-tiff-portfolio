
import { getPage2Data, getFontData } from '../api/api';
import { useEffect } from 'react';
import { Entry } from 'contentful';
import { TypeFont, TypePages } from '../../interfaces/contentful';

type PageOneProps = {
  pageTwoData: Entry<TypePages>
  fontAPIData: Entry<TypeFont>
}

export default function PageTwo({pageTwoData, fontAPIData}:PageOneProps) {
  const fontMetadata = fontAPIData.fields
  const pageTwoMetadata = pageTwoData.fields
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontMetadata.animationFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontMetadata.titleFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontMetadata.contentFont ?? ''))
    },[])
  return (
    <div className='flex flex-col'>
       <section className='py-10 lg:pt-[9.88vh] lg:pb-[5vh] px-5 lg:px-[8.89vw]'>
         <div className='flex flex-col justify-center text-center space-y-2'>
          <h1 className='lg:text-5xl sm:text-3xl font-title'>{pageTwoMetadata.title}</h1>
          <div className='text-white flex flex-row h-6 justify-center gap-x-2'>
            <div className='uppercase font-content'>{pageTwoMetadata.pageTag1}</div>
            <div className='vertical-line' />
            <div className='uppercase font-content'>{pageTwoMetadata.pageTag2}</div>
          </div>
        </div>
      </section>
      <section className='text-2xl text-center justify-center flex flex-row text-white pt-2'>
        <div className='flex flex-col gap-y-8'>
          <p className='lg:max-w-xl sm:max-w-sm font-content md:text-lg sm:text-sm'>
              {pageTwoMetadata.pageDescription?.content?.[0].content?.[0].value}{' '}
          </p>
          <div className='text-white text-center justify-center'>
            <div className='font-content md:text-lg sm:text-sm'>Client: {pageTwoMetadata.projectClient}</div>
            <div className='font-content md:text-lg sm:text-sm'>Designer: {pageTwoMetadata.projectDesigner}</div>
            <div className='font-content md:text-lg sm:text-sm'>Developer: {pageTwoMetadata.projectDeveloper}</div>
          </div>
        </div>
      </section>
      <section className='flex flex-row justify-center mx-20 lg:mx-80'>
          <div className='py-20 space-y-10'>
            <img
              alt=""
              src={
                pageTwoMetadata.pic1?.fields.file.url
              }
              className='w-full'
              />
            <div className='flex'>
              <div className='w-1/2 p-1'>
                <img alt='' src={pageTwoMetadata.pic2?.fields.file.url} className='h-full'/>
              </div>
              <div className='w-1/2 p-1'>
                <img alt='' src={pageTwoMetadata.pic3?.fields.file.url} className='h-full'/>
              </div>
            </div>
            {pageTwoMetadata.videoUrl ? <iframe width={'100%'} height="500"  src={pageTwoMetadata.videoUrl}></iframe> : undefined}
            <img
              alt=""
              src={
                pageTwoMetadata.pic4?.fields.file.url
              }
              className='w-full block ml-auto mr-auto'
              />
            <div className='flex'>
              <div className='w-1/2 p-1'>
                <img alt='' src={pageTwoMetadata.pic5?.fields.file.url} className='h-full'/>
              </div>
              <div className='w-1/2 p-1'>
                <img alt='' src={pageTwoMetadata.pic6?.fields.file.url} className='h-full'/>
              </div>
            </div>
        </div>
      </section>
      <section className='relative h-[90vh]'>
            <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
            <p className='whitespace-nowrap uppercase font-medium text-[15vw] md:text-[20vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
              <span className='text-scrolling font-animation'>{pageTwoMetadata.animation1}</span>
              <span className='text-scrolling font-animation'>{pageTwoMetadata.animation1}</span>
            </p>
            <p className='whitespace-nowrap uppercase font-medium text-[15vw] md:text-[20vw] lg:text-xxl1 lg:mt-16 leading-1 lg:leading-[15.28vw]'>
              <span className='reverse text-scrolling font-animation'>{pageTwoMetadata.animation2}</span>
              <span></span>
            </p>
            </div>
            <div className='absolute top-10 left-0 flex flex-row justify-center w-full h-full'>
              <div className='absolute md:max-w-lg sm:max-w-sm sm:mx-10'>
                <img alt='' src={pageTwoMetadata.nextPagePic?.fields.file.url} className=' h-[80vh] max-h-200px' />
                  <div
                    className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900  hover:opacity-60'
                    >
                    <a href="/work/page3">
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
  const pageTwoData = (await getPage2Data())
  const fontAPIData = (await getFontData())
  return {
    props: {
      pageTwoData,
      fontAPIData
    }
  }

}