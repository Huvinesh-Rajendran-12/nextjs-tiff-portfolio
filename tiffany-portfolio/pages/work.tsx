import { useEffect } from 'react';
import { TypeFont, TypeWork } from '../interfaces/contentful';
import { Entry } from 'contentful';
import { getFontData, getWorkPageData } from './api/api';

interface WorkPageProps {
  WorkPageData: Entry<TypeWork>
  fontAPIData: Entry<TypeFont>
}

export default function Work({WorkPageData, fontAPIData}:WorkPageProps) {
  const fontAPIMetadata = fontAPIData.fields
  const WorkPageMetaData = WorkPageData.fields
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontAPIMetadata.animationFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontAPIMetadata.titleFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontAPIMetadata.contentFont ?? ''))
    },[])
  return (
    <div className='flex flex-col'>
      <section>
        <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
          <p className='whitespace-nowrap uppercase font-medium text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
              <span className='text-scrolling font-animation'>{WorkPageMetaData.animation1}</span>
              <span className='text-scrolling font-animation'>{WorkPageMetaData.animation1}</span>
          </p>
        </div>
      </section>
      <section>
        <div className="container lg:px-32 px-4 py-8 mx-auto items-center ">
          <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2 max-h-[1200px]">
            <div className="w-full row-span-2">
              <div className='h-full'>
                <img
                  src={WorkPageMetaData.pic1?.fields.file.url}
                  alt="Photo by Claudio Schwarz on Unsplash"
                  className="inset-0 h-full w-full object-cover object-center rounded"/>
                <div
                  className='flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900  hover:opacity-60'
                  >
                  <a href={`/work/${WorkPageMetaData.pic1Page}`}>
                    VIEW PROEJCT
                  </a>
              </div>
              </div>
            </div>
            <div className="w-full col-span-2 row-span-2">
              <a href={`/work/${WorkPageMetaData.pic2Page}`}>
              <img
                src={WorkPageMetaData.pic2?.fields.file.url}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
              </a>
            </div>
            <div className="w-full max-h-[700px] ">
              <a href={`/work/${WorkPageMetaData.pic3Page}`}>
              <img
                src={WorkPageMetaData.pic3?.fields.file.url}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
              </a>
            </div>
            <div className="w-full">
              <a href={`/work/${WorkPageMetaData.pic4Page}`}>
              <img
                src={WorkPageMetaData.pic4?.fields.file.url}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
              </a>
            </div>
            <div className="w-full col-span-2 row-span-2">
              <a href={`/work/${WorkPageMetaData.pic5Page}`}>
              <img
                src={WorkPageMetaData.pic5?.fields.file.url}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
              </a>
            </div>
            <div className="w-full col-span-2">
              <a href={`/work/${WorkPageMetaData.pic6Page}`}>
              <img
                src={WorkPageMetaData.pic6?.fields.file.url}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
              </a>
            </div>
            <div className="w-full">
              <a href={`/work/${WorkPageMetaData.pic7Page}`}>
              <img
                src={WorkPageMetaData.pic7?.fields.file.url}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
              </a>
            </div>
            <div className="w-full">
              <a href={`/work/${WorkPageMetaData.pic8Page}`}>
              <img
                src={WorkPageMetaData.pic8?.fields.file.url}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
          <p className='whitespace-nowrap mb-6 uppercase font-medium text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
              <span className='text-scrolling font-animation'>{WorkPageMetaData.animation2}</span>
              <span className='text-scrolling font-animation'>{WorkPageMetaData.animation2}</span>
          </p>
        </div>
      </section>
</div>

  );
}

export const getStaticProps = async () => {
  const WorkPageData = (await getWorkPageData())
  const fontAPIData = (await getFontData())
  return {
    props: {
      WorkPageData,
      fontAPIData
    }
  }

}