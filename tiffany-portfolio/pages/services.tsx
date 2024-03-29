
import { Entry } from 'contentful';
import ContactButton from '../components/Button';
import { useEffect } from 'react';
import { TypeFont, TypeServices } from '../interfaces/contentful';
import { getFontData, getServicesPageData } from './api/api';
import Head from 'next/head';

interface ServicesPageProps {
  ServicesPageData: Entry<TypeServices>
  fontAPIData: Entry<TypeFont>
}

export default function ServicesPage({ServicesPageData, fontAPIData}: ServicesPageProps) {
  const ServicesPageMetadata = ServicesPageData.fields
  const fontDataMetadata = fontAPIData.fields
  // const ServicesPageMetadata = useServicesPageStore((state) => state.ServicesPageData?.metadata)
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontDataMetadata.animationFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontDataMetadata.titleFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontDataMetadata.contentFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-subtitle')?.forEach((e) => e.style.setProperty('--font-subtitle', fontDataMetadata.homePageSubtitle ?? ''))
    document.querySelectorAll<HTMLElement>('.font-contact')?.forEach((e) => e.style.setProperty('--font-contact', fontDataMetadata.viewProjectContactMeFont ?? ''))
    },[])
  return (
    <div className='flex flex-col'>
      <Head>
        <title>TIFFANYCFY | SERVICES</title>
      </Head>
      <section>
        <div className='mt-12'>
          <div className='flex justify-center'>
            <h1 className='lg:text-5xl sm:text-3xl font-title'>{ServicesPageMetadata.pageTitle}</h1>
          </div>
          <div className='flex justify-center'>
            <div className='max-w-md'>
              {ServicesPageMetadata.pageDescription?.content?.map((item)=> {

      return (
                      <p
                className='text-center py-10 text-white font-content lg:max-w-xl sm:max-w-sm sm:mx-6 md:mx-0 font-content md:text-lg sm:text-md'
              >
                {item.content?.[0].value}
              </p>
      )
              })}

            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='pt-3'>
          <div
            className='flex-col lg:flex-row flex items-center justify-center md:px-3 gap-y-4 md:space-x-10 sm:mx-3 md:mx-0'
          >
            <img
              alt=""
              src={ServicesPageMetadata?.firstServicePic?.fields.file.url}
              className='md:max-w-[550px] sm:max-w-[360px]'
            />
            <div className='sm:ml-10 md:ml-0'>
              <h1 className='text-white md:text-left text-center font-subtitle sm:text-2xl md:text-3xl'>1</h1>
              <h1 className='text-white lg:text-left sm:text-center font-subtitle font-medium py-4'>
                {ServicesPageMetadata.firstServiceTitle}
              </h1>
              <div className='max-w-sm pt-4'>
                {ServicesPageMetadata.firstServiceDescription?.content?.map((item)=> {
            return (
                <p className='font-content lg:text-left sm:text-center'>
                  {item.content?.[0].value}
                </p>
            )
                })}
              </div>
              <h1 className='lg:text-left sm:text-center font-bold font-subtitle py-4'>{ServicesPageMetadata.firstServiceListTitle}</h1>
              <ul className='list-disc ml-6 py-4'>
                {ServicesPageMetadata.firstServiceListItems?.content[0].content?.map((item) => {
                    return (
                        <li>
                          <div className='font-content'>
                            {item.content?.[0].content?.[0].value}
                          </div>
                        </li>
                    )
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='mx-auto'>
        <div className='pt-20'>
          <div
            className='flex-col-reverse lg:flex-row flex items-center justify-center md:px-3 gap-y-4 md:space-x-10 sm:mx-3 md:mx-0'
          >
            <div className='sm:ml-10 md:ml-0'>
              <h1 color={'secondary'} className='lg:text-left sm:text-center font-subtitle sm:text-2xl md:text-3xl'>2</h1>
              <h1 className='text-white py-2 lg:text-left sm:text-center font-subtitle'>
                {ServicesPageMetadata.secondServiceTitle}
              </h1>
              <div className='max-w-sm pt-4'>
                {ServicesPageMetadata.secondServiceDescription?.content?.map((item)=> {
            return (
                <p className='font-content sm:text-center lg:text-left'>
                  {item.content?.[0].value}
                </p>
            )
                })}
              </div>
              <h1 className='lg:text-left sm:text-center font-bold font-subtitle py-4'>{ServicesPageMetadata.secondServiceListTitle}</h1>
              <ul className='list-disc ml-6'>
                {ServicesPageMetadata.secondServiceListItems?.content[0].content?.map((item) => {
                    return (
                        <li>
                          <div className='font-content'>
                            {item.content?.[0].content?.[0].value}
                          </div>
                        </li>
                    )
                  }
                )}
              </ul>
            </div>
            <img
              alt=""
              src={ServicesPageMetadata?.secondServicePic?.fields.file.url}
              className='md:max-w-[550px] sm:max-w-[360px]'
            />
          </div>
        </div>
      </section>
      <section className='sm:mt-10 md:mt-0'>
        <div className='overflow-hidden h-full lg:pt-[8.35vh] flex flex-col justify-between lg:block'>
          <p className='whitespace-nowrap items-center font-medium text-[15vw] md:text-[20vw] leading-1'> 
            <span className='text-scrolling font-animation'>{ServicesPageMetadata.animation}</span>
            <span>{'    '}</span>
            <span className='text-scrolling font-animation'>{ServicesPageMetadata.animation}</span>
          </p>
        </div>
      </section>
      <section className='py-4'>
        <div
          className='text-2xl text-center justify-center flex flex-row text-white pt-2'
        >
          <p className='font-content text-center py-10 text-white lg:max-w-lg sm:max-w-sm sm:mx-6 font-content md:text-2xl sm:text-lg'>
            {ServicesPageMetadata.customerMessage}
          </p>
        </div>
      </section>
      <section >
        <div className='py-2 px-2 flex-col' >
          <div
            className='flex lg:flex-row flex-col lg:h-14 items-center justify-center text-center gap-x-4 sm:space-y-2 '
            >
            <div color={'secondary'} className='text-white'>
              <div className='font-subtitle text-lg md:mb-1'>Step 1</div>
              <div className='text-center font-content max-w-[150px]'>
                {ServicesPageMetadata.step1}
              </div>
            </div>
            <div className='vertical-line' />
            <div color={'secondary'} className='text-white'>
              <div className='font-subtitle text-lg md:mb-1'>Step 2</div>
              <div className='text-center font-content max-w-[150px]'>
                {ServicesPageMetadata.step2}
              </div>
            </div>
            <div className='vertical-line' />
            <div color={'secondary'} className='text-white'>
              <div className='font-subtitle text-lg md:mb-1'>Step 3</div>
              <div className='text-center font-content max-w-[150px]'>
                {ServicesPageMetadata.step3}
              </div>
            </div>
          </div>
        </div>
      </section>
        <div className='flex flex-row justify-center py-14 md:mb-10 sm:mb-5'>
          <a href="mailto:imtiffanycfy@gmail.com">
            <ContactButton
              text="Contact Me"
              className="border-white border py-2 px-4 font-contact"
            />
          </a>
        </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const ServicesPageData = (await getServicesPageData())
  const fontAPIData = (await getFontData())
  return {
    props: {
      ServicesPageData,
      fontAPIData
    }
  }

}

