
import { useEffect } from 'react';
import { getPage1Data, getFontData } from '../api/api';
import { Entry } from 'contentful';
import { TypeFont, TypePages } from '../../interfaces/contentful';

type PageOneProps = {
  pageOneData: Entry<TypePages>
  fontAPIData: Entry<TypeFont>
}

export default function PageOne({pageOneData, fontAPIData}:PageOneProps) {
  const pageOneMetadata = pageOneData.fields
  const fontMetadata = fontAPIData.fields
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontMetadata.animationFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontMetadata.titleFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontMetadata.contentFont ?? ''))
    },[])
  return (
    <div className="flex flex-col">
      <section className='py-10 lg:pt-[9.88vh] lg:pb-[5vh] px-5 lg:px-[8.89vw]'>
        <div className='flex flex-col justify-center text-center space-y-2'>
          <h1 className='lg:text-5xl sm:text-3xl font-title'>{pageOneMetadata.title}</h1>
          <div className='text-white flex flex-row h-6 justify-center gap-x-2'>
            <div className='uppercase font-content sm:text-lg'>{pageOneMetadata.pageTag1}</div>
            <div className='vertical-line' />
            <div className='uppercase font-content sm:text-lg'>{pageOneMetadata.pageTag2}</div>
          </div>
        </div>
      </section>
      <section className='text-center justify-center flex flex-row text-white'>
        <div className='flex flex-col gap-y-8 mx-10'>
          <p className='lg:max-w-xl sm:max-w-sm font-content md:text-lg sm:text-sm'>
              {pageOneMetadata.pageDescription?.content?.[0].content?.[0].value}{' '}
          </p>
          <div className='text-white text-center justify-center'>
            <div className='font-content md:text-lg sm:text-sm'>Client: {pageOneMetadata.projectClient}</div>
            <div className='font-content md:text-lg sm:text-sm'>Designer: {pageOneMetadata.projectDesigner}</div>
            <div className='font-content md:text-lg sm:text-sm'>Developer: {pageOneMetadata.projectDeveloper}</div>
          </div>
        </div>
      </section>
      <section className='flex flex-row justify-center mx-20 lg:mx-80'>
        <div className='py-20 space-y-10'>
          <img
            alt=""
            src={
              pageOneMetadata.pic1?.fields.file.url
            }
            className='w-full block ml-auto mr-auto'
            />
          <div className='flex'>
            <div className='w-1/2 p-1'>
              <img alt='' src={pageOneMetadata.pic2?.fields.file.url} className='h-full'/>
            </div>
            <div className='w-1/2 p-1'>
              <img alt='' src={pageOneMetadata.pic3?.fields.file.url} className='h-full'/>
            </div>
          </div>
          {pageOneMetadata.videoUrl ? <iframe width={'100%'} height="500"  src={pageOneMetadata.videoUrl}></iframe> : undefined}
          <img
            alt=""
            src={
              pageOneMetadata.pic4?.fields.file.url
            }
            className='w-full block ml-auto mr-auto'
            />
          <div className='flex'>
            <div className='w-1/2 p-1'>
              <img alt='' src={pageOneMetadata.pic5?.fields.file.url} className='h-full'/>
            </div>
            <div className='w-1/2 p-1'>
              <img alt='' src={pageOneMetadata.pic6?.fields.file.url} className='h-full'/>
            </div>
          </div>
        </div>
      </section>
      <section className='relative h-[90vh]'>
            <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
              <p className='whitespace-nowrap uppercase font-medium text-[15vw] md:text-[20vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
                <span className='text-scrolling font-animation uppercase'>{pageOneMetadata.animation1}</span>
                <span className='text-scrolling font-animation uppercase'>{pageOneMetadata.animation1}</span>
              </p>
              <p className='whitespace-nowrap uppercase font-medium text-[15vw] md:text-[20vw] lg:text-xxl1 lg:mt-16 leading-1 lg:leading-[15.28vw]'>
                <span className='reverse text-scrolling font-animation'>{pageOneMetadata.animation2}</span>
                <span></span>
              </p>
            </div>
            <div className='absolute top-10 left-0 flex flex-row justify-center md:w-full w-full h-full'>
              <div className='absolute md:max-w-lg sm:max-w-sm sm:mx-10'>
                <img alt='' src={pageOneMetadata.nextPagePic?.fields.file.url} className='h-[80vh] max-h-200px' />
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
  const pageOneData = (await getPage1Data())
  const fontAPIData = (await getFontData())
  return {
    props: {
      pageOneData,
      fontAPIData,
    }
  }

}