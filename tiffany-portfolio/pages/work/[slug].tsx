import { useEffect } from 'react';
import { getPageSlugList , getFontData, getPageBySlug } from '../api/api';
import { Entry } from 'contentful';
import { TypeFont, TypePages } from '../../interfaces/contentful';
import Head from 'next/head';

type PageOneProps = {
  pageData: Entry<TypePages>
  fontAPIData: Entry<TypeFont>
}

export default function PageOne({pageData, fontAPIData}:PageOneProps) {
  console.log('pageData',pageData)
  const pageMetadata = pageData.fields
  const fontMetadata = fontAPIData.fields
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontMetadata.animationFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontMetadata.titleFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontMetadata.contentFont ?? ''))
    },[])
  return (
    <div className="flex flex-col">
      <Head>
        <title>TIFFANYCFY | WORK | {pageMetadata?.title}</title>
      </Head>
      <section className='py-10 lg:pt-[9.88vh] lg:pb-[5vh] px-5 lg:px-[8.89vw]'>
        <div className='flex flex-col justify-center text-center space-y-8'>
          <h1 className='lg:text-5xl sm:text-3xl font-title'>{pageMetadata?.title}</h1>
          <div className='text-white flex flex-row justify-center gap-x-2'>
            <div className='uppercase font-content sm:text-lg'>{pageMetadata?.pageTag1}</div>
            {/* <div className='vertical-line' />
            <div className='uppercase font-content sm:text-lg'>{pageOneMetadata.pageTag2}</div> */}
          </div>
        </div>
      </section>
      <section className='text-center justify-center flex flex-row text-white'>
        <div className='flex flex-col gap-y-8 mx-10'>
          <p className='lg:max-w-xl sm:max-w-sm font-content md:text-lg sm:text-sm'>
              {pageMetadata?.pageDescription?.content?.[0].content?.[0].value}{' '}
          </p>
          <div className='text-white text-center justify-center'>
            <div className='font-content md:text-lg sm:text-sm'>Client: {pageMetadata?.projectClient}</div>
            <div className='font-content md:text-lg sm:text-sm'>Designer: {pageMetadata?.projectDesigner}</div>
            <div className='font-content md:text-lg sm:text-sm'>Developer: {pageMetadata?.projectDeveloper}</div>
          </div>
        </div>
      </section>
      <section className='flex flex-row justify-center sm:mx-5 md:mx-20 lg:mx-80'>
        <div className='py-20 space-y-10'>
          <img
            alt=""
            src={
              pageMetadata?.pic1?.fields.file.url
            }
            className='w-full block ml-auto mr-auto rounded-md'
            />
          <div className='flex sm:flex-col md:flex-row'>
            <div className='md:w-1/2 w-full'>
              <img alt='' src={pageMetadata?.pic2?.fields.file.url} className='h-full max-h-[550px] rounded-md'/>
            </div>
            <div className='md:w-1/2 w-full md:pl-4 sm:mt-10 md:mt-0'>
              <img alt='' src={pageMetadata?.pic3?.fields.file.url} className='h-full max-h-[550px] rounded-md'/>
            </div>
          </div>
          {pageMetadata?.videoUrl ? <iframe width={'100%'} height="500"  src={pageMetadata?.videoUrl}></iframe> : undefined}
          <img
            alt=""
            src={
              pageMetadata?.pic4?.fields.file.url
            }
            className='w-full block ml-auto mr-auto rounded-md'
            />
          <div className='flex sm:flex-col md:flex-row'>
            <div className='md:w-1/2 w-full'>
              <img alt='' src={pageMetadata?.pic5?.fields.file.url} className='h-full sm:max-h-[550px] rounded-md'/>
            </div>
            <div className='md:w-1/2 w-full md:pl-4 sm:mt-10 md:mt-0'>
              <img alt='' src={pageMetadata?.pic6?.fields.file.url} className='h-full sm:max-h-[550px] rounded-md'/>
            </div>
          </div>
        </div>
      </section>
      <section className='relative lg:h-[90vh] sm:h-[40vh] md:h-[50vh] sm:mb-12'>
            <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col lg:space-y-4 justify-between lg:block'>
              <p className='whitespace-nowrap uppercase font-medium sm:mt-6 sm:text-[100px] md:text-[18vw] lg:pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
                <span className='text-scrolling font-animation'>{pageMetadata?.animation1}</span>
                <span>{'  '}</span>
                <span className='text-scrolling font-animation'>{pageMetadata?.animation1}</span>
              </p>
              <p className='whitespace-nowrap uppercase font-medium sm:text-[100px] md:text-[18vw] lg:mt-16 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'>
                <span className='reverse text-scrolling font-animation'>{pageMetadata?.animation2}</span>
                <span>{'   '}</span>
              </p>
            </div>
            <div className='absolute top-8 left-0 flex flex-row items-center justify-center w-full h-full'>
              <img alt='' src={pageMetadata?.nextPage.fields.pic1?.fields.file.url} className='md:w-1/2 h-[80vh] sm:w-1/2 lg:max-w-[520px]  sm:h-5/6 md:h-5/6'/>
              <div
                className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900  hover:opacity-60'
                >
                <a href={`/work/${pageMetadata?.nextPage.fields.slug}`}>
                  VIEW PROJECT
                </a>
              </div>
            </div>
      </section>
    </div>
  );
}

type StaticProps = {
    params : {
        slug: string | undefined
    }
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const pageSlugData = (await getPageSlugList())
  // Get the paths we want to pre-render based on posts
  const paths = pageSlugData.items.map((page) => ({
    params: { slug: page.fields?.slug },
  }));
  // Set fallback to blocking. Now any new post added post build will SSR
  // to ensure SEO. It will then be static for all subsequent requests
  return { paths, fallback: 'blocking' };
}

export const getStaticProps = async ({params}:StaticProps) => {
  // const pageOneData = usePagesStore((state) => state.pagesData ? state.pagesData[4] : undefined)
  const pageDataItems = (await getPageBySlug(params.slug))
  const pageData = pageDataItems.items[0]
  const fontAPIData = (await getFontData())
  return {
    props: {
      pageData,
      fontAPIData,
    }
  }
}