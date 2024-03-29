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
  const pageMetadata = pageData.fields
  console.log(pageMetadata.nextPageSlug)
  const fontMetadata = fontAPIData.fields
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontMetadata.animationFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontMetadata.titleFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontMetadata.contentFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-view')?.forEach((e) => e.style.setProperty('--font-view', fontMetadata.viewProjectContactMeFont ?? ''))
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
            <div className='font-content sm:text-lg'>{pageMetadata?.pageTag1}</div>
          </div>
        </div>
      </section>
      <section className='text-center justify-center flex flex-row text-white'>
        <div className='flex flex-col gap-y-8 mx-10'>
          {
            pageMetadata?.pageDescription?.content?.map((item)=> {
              return(
                <p className='lg:max-w-xl sm:max-w-sm font-content md:text-lg sm:text-sm'>
                    {item.content?.[0].value}
                </p> 
              )
            })
          }
          {/* <p className='lg:max-w-xl sm:max-w-sm font-content md:text-lg sm:text-sm'>
              {pageMetadata?.pageDescription?.content?.[0].content?.[0].value}{' '}
          </p> */}
          <div className='text-white text-center justify-center'>
            <div className='font-content md:text-lg sm:text-sm'>Client: {pageMetadata?.projectClient}</div>
            <div className='font-content md:text-lg sm:text-sm'>Designer: {pageMetadata?.projectDesigner}</div>
            <div className='font-content md:text-lg sm:text-sm'>Developer: {pageMetadata?.projectDeveloper}</div>
          </div>
        </div>
      </section>
      <section className='flex flex-row justify-center sm:mx-5 md:mx-20 lg:mx-80'>
        <div className='py-10 space-y-10'>
          <img
            alt=""
            src={
              pageMetadata?.pic1?.fields?.file?.url
            }
            className='w-full block ml-auto mr-auto'
            />
          <div className='flex sm:flex-col md:flex-row md:gap-x-4'>
            <div className='md:w-1/2 w-full'>
              <img alt='' src={pageMetadata?.pic2?.fields?.file?.url} className='h-full w-full max-h-[550px]'/>
            </div>
            <div className='md:w-1/2 w-full sm:mt-10 md:mt-0'>
              <img alt='' src={pageMetadata?.pic3?.fields?.file?.url} className='h-full w-full max-h-[550px]'/>
            </div>
          </div>
          {pageMetadata?.videoUrl ? <iframe width={'100%'} height="500"  src={pageMetadata?.videoUrl}></iframe> : undefined}
          <img
            alt=""
            src={
              pageMetadata?.pic4?.fields.file.url
            }
            className='w-full block ml-auto mr-auto'
            />
          <div className='flex sm:flex-col md:flex-row md:gap-x-4'>
            <div className='md:w-1/2 w-full'>
              <img alt='' src={pageMetadata?.pic5?.fields?.file?.url} className='h-full w-full sm:max-h-[550px]'/>
            </div>
            <div className='md:w-1/2 w-full sm:mt-10 md:mt-0'>
              <img alt='' src={pageMetadata?.pic6?.fields?.file?.url} className='h-full w-full sm:max-h-[550px]'/>
            </div>
          </div>
        </div>
      </section>
      <section className='relative lg:h-[90vh] sm:h-[40vh] md:h-[60vh] sm:mb-12 md:py-8'>
            <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col lg:space-y-4 justify-center'>
              <p className='whitespace-nowrap font-medium sm:text-[70px] md:text-[10vw] lg:text-[15vw] lg:leading-[15.28vw]'> 
                <span className='text-scrolling font-animation'>{pageMetadata?.animation1}</span>
                <span>{'  '}</span>
                <span className='text-scrolling font-animation'>{pageMetadata?.animation1}</span>
              </p>
              <p className='whitespace-nowrap font-light sm:text-[70px] md:text-[10vw] lg:text-[15vw] lg:leading-[15.28vw]'>
                <span className='reverse text-scrolling font-animation'>{pageMetadata?.animation2}</span>
                <span>{'   '}</span>
              </p>
            </div>
              <a href={`/work/${pageMetadata.nextPageSlug}`}>
                <div className='absolute top-8 left-0 flex flex-row items-center justify-center w-full h-full'>
                <img alt='' src={pageMetadata?.nextPagePic?.fields?.file.url} className='md:w-1/2 h-[81vh] sm:w-3/4 lg:max-w-[520px] sm:h-5/6 sm:max-w-[400px] md:h-5/6'/>
                <div
                  className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900  hover:opacity-60'
                  >
                  <p className='font-view text-white'>
                    NEXT PROJECT
                  </p>
                </div>
              </div>
              </a>
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
    params: { slug: page?.fields?.slug },
  }));
  // Set fallback to blocking. Now any new post added post build will SSR
  // to ensure SEO. It will then be static for all subsequent requests
  return { paths, fallback: 'blocking' };
}

export const getStaticProps = async ({params}:StaticProps) => {
  // const pageOneData = usePagesStore((state) => state.pagesData ? state.pagesData[4] : undefined)
  const pageDataItems = (await getPageBySlug(params.slug))
  const pageData = pageDataItems.items[0]
  console.log('pageData',pageData.fields.nextPageSlug)
  const fontAPIData = (await getFontData())
  return {
    props: {
      pageData,
      fontAPIData,
    }
  }
}