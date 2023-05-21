import { useEffect } from 'react';
import { TypeFont, TypeWork } from '../interfaces/contentful';
import { Entry } from 'contentful';
import { getFontData, getWorkPageData } from './api/api';
import Head from 'next/head';

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
    document.querySelectorAll<HTMLElement>('.font-view')?.forEach((e) => e.style.setProperty('--font-view', fontAPIMetadata.viewProjectContactMeFont ?? ''))
    },[])
  return (
    <div className='flex flex-col'>
      <Head>
        <title>TIFFANYCFY | WORK</title>
      </Head>
      <section>
        <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
          <p className='whitespace-nowrap font-medium text-[30vw] md:text-[20vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
              <span className='text-scrolling font-animation'>{WorkPageMetaData.animation1}</span>
              <span className='text-scrolling font-animation'>{WorkPageMetaData.animation1}</span>
          </p>
        </div>
      </section>
      <section className='md:mt-20'>
        <div className="container lg:px-32 md:px-4 py-8 mx-auto items-center">
          <div className="grid md:grid-cols-4 grid-rows-4 grid-flow-col gap-2 max-h-[1400px]">
            <div className="w-full h-full md:row-span-2">
              <div className="flex h-full items-center justify-center">
                <a className="relative h-full w-full bg-gray-900 group" 
                    href={`/work/${WorkPageMetaData?.pic1Reference?.fields.slug}`}>
                    <img className="absolute inset-0 object-cover 
                                w-full h-full group-hover:opacity-50"
                        src={WorkPageMetaData?.pic1Reference?.fields.pic1?.fields.file.url} />
                    <div className="relative p-5">
                        <div className='mt-40'>
                            <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0 sm:group-hover:-translate-y-20">
                                <div className="flex justify-center">
                                    <p className="text-lg text-white font-view sm:text-center">
                                        VIEW PROJECT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
              </div>
            </div>
            <div className="w-full h-full md:col-span-2 md:row-span-2">
              <div className="flex h-full items-center justify-center">
                <a className="relative h-full w-full bg-gray-900 group" 
                    href={`/work/${WorkPageMetaData?.pic2Reference?.fields.slug}`}>
                    <img className="absolute inset-0 object-cover 
                                w-full h-full group-hover:opacity-50"
                        src={WorkPageMetaData?.pic2Reference?.fields.pic1?.fields.file.url} />
                    <div className="relative p-5">
                        <div className='mt-40'>
                            <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0 sm:group-hover:-translate-y-20">
                                <div className="flex justify-center items-center">
                                    <p className="text-lg text-white font-view sm:text-center">
                                        VIEW PROJECT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
              </div>
            </div>
            <div className="w-full max-h-[700px]">
              <div className="flex h-full items-center justify-center">
                <a className="relative h-full w-full bg-gray-900 group" 
                    href={`/work/${WorkPageMetaData?.pic3Reference?.fields.slug}`}>
                    <img className="absolute inset-0 object-cover 
                                w-full h-full group-hover:opacity-50"
                        src={WorkPageMetaData?.pic3Reference?.fields.pic1?.fields.file.url} />
                    <div className="relative p-5">
                        <div className='mt-20'>
                            <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-2">
                                <div className="flex justify-center">
                                    <p className="text-lg text-white font-view sm:text-center">
                                        VIEW PROJECT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
              </div>
            </div>
            <div className="w-full">
              <div className="flex h-full items-center justify-center">
                <a className="relative h-full w-full bg-gray-900 group" 
                    href={`/work/${WorkPageMetaData?.pic4Reference?.fields.slug}`}>
                    <img className="absolute inset-0 object-cover 
                                w-full h-full group-hover:opacity-50"
                        src={WorkPageMetaData?.pic4Reference?.fields.pic1?.fields.file.url} />
                    <div className="relative p-5">
                        <div className='mt-20'>
                            <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                                <div className="flex justify-center">
                                    <p className="text-lg text-white font-view sm:text-center">
                                        VIEW PROJECT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
              </div>
            </div>
            <div className="w-full md:col-span-2 md:row-span-2">
              <div className="flex h-full items-center justify-center">
                <a className="relative h-full w-full bg-gray-900 group" 
                    href={`/work/${WorkPageMetaData.pic5Reference?.fields.slug}`}>
                    <img className="absolute inset-0 object-cover 
                                w-full h-full group-hover:opacity-50"
                        src={WorkPageMetaData?.pic5Reference?.fields.pic1?.fields.file.url} />
                    <div className="relative p-5">
                        <div className='mt-40'>
                            <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0 sm:group-hover:-translate-y-20">
                                <div className="flex justify-center">
                                    <p className="text-lg text-white font-view sm:text-center">
                                        VIEW PROJECT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
              </div>
            </div>
            <div className="w-full md:col-span-2">
              <div className="flex h-full items-center justify-center">
                <a className="relative h-full w-full bg-gray-900 group" 
                    href={`/work/${WorkPageMetaData?.pic6Reference?.fields.slug}`}>
                    <img className="absolute inset-0 object-cover 
                                w-full h-full group-hover:opacity-50"
                        src={WorkPageMetaData?.pic6Reference?.fields.pic1?.fields.file.url} />
                    <div className="relative p-5">
                        <div className='mt-20'>
                            <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                                <div className="flex justify-center">
                                    <p className="text-lg text-white font-view sm:text-center">
                                        VIEW PROJECT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
              </div>
            </div>
            <div className="w-full">
              <div className="flex h-full items-center justify-center">
                <a className="relative h-full w-full bg-gray-900 group" 
                    href={`/work/${WorkPageMetaData?.pic7Reference?.fields.slug}`}>
                    <img className="absolute inset-0 object-cover 
                                w-full h-full group-hover:opacity-50"
                        src={WorkPageMetaData?.pic7Reference?.fields.pic1?.fields.file.url} />
                    <div className="relative p-5">
                        <div className='mt-20'>
                            <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                                <div className="flex justify-center">
                                    <p className="text-lg text-white font-view sm:text-center">
                                        VIEW PROJECT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
              </div>
            </div>
            <div className="w-full">
              <div className="flex h-full items-center justify-center">
                <a className="relative h-full w-full bg-gray-900 group" 
                    href={`/work/${WorkPageMetaData?.pic8Reference?.fields.slug}`}>
                    <img className="absolute inset-0 object-cover 
                                w-full h-full group-hover:opacity-50"
                        src={WorkPageMetaData?.pic8Reference?.fields.pic8?.fields.file.url} />
                    <div className="relative p-5">
                        <div className='mt-40'>
                            <div className="transition-all transform 
                                translate-y-4 opacity-0 
                                group-hover:opacity-100 
                                group-hover:-translate-y-20">
                                <div className="flex justify-center">
                                    <p className="text-lg text-white font-view sm:text-center">
                                        VIEW PROJECT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
          <p className='whitespace-nowrap mb-6 font-medium text-[30vw] md:text-[20vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
              <span className='reverse text-scrolling font-animation'>{WorkPageMetaData.animation2}</span>
              <span className='reverse text-scrolling font-animation'>{WorkPageMetaData.animation2}</span>
          </p>
        </div>
      </section>
</div>

  );
}

export const getStaticProps = async () => {
  const WorkPageDataItems = (await getWorkPageData())
  const WorkPageData = WorkPageDataItems.items[0]
  const fontAPIData = (await getFontData())
  return {
    props: {
      WorkPageData,
      fontAPIData
    }
  }

}