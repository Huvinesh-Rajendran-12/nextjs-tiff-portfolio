
import { Entry } from 'contentful';
import ContactButton from '../components/Button';
import { useEffect } from 'react';
import { TypeFont, TypeServices } from '../interfaces/contentful';
import { getFontData, getServicesPageData } from './api/api';

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
    },[])
  return (
    <div className='flex flex-col'>
      <section>
        <div className='pt-4'>
          <div className='flex justify-center'>
            <h1 className='lg:text-5xl sm:text-3xl font-title'>{ServicesPageMetadata.pageTitle}</h1>
          </div>
          <div className='flex justify-center'>
            <div className='max-w-md'>
              <p
                className='text-center py-10 text-white font-content lg:max-w-xl sm:max-w-sm sm:mx-6 md:mx-0 font-content md:text-lg sm:text-md'
              >
                {ServicesPageMetadata.pageDescription?.content?.[0].content?.[0].value}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='pt-3'>
          <div
            className='flex-col lg:flex-row flex items-center justify-center px-3 gap-y-4 space-x-10'
          >
            <img
              alt=""
              src={ServicesPageMetadata?.firstServicePic?.fields.file.url}
              className='rounded-md'
            />
            <div>
              <h1 className='text-white md:text-left text-center font-content sm:text-2xl md:text-3xl'>1</h1>
              <h1 className='text-white text-left font-title font-medium py-2'>
                {ServicesPageMetadata.firstServiceTitle}
              </h1>
              <div className='max-w-sm'>
                <p className='font-content'>
                  {ServicesPageMetadata.firstServiceDescription?.content?.[0].content?.[0].value}
                </p>
              </div>
              <h1 className='text-left font-bold font-title py-2'>{ServicesPageMetadata.firstServiceListTitle}</h1>
              <ul className='list-disc ml-6'>
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
      <section>
        <div className='pt-20'>
          <div
            className='flex-col-reverse lg:flex-row flex items-center justify-center md:px-3 gap-y-4 md:space-x-10 sm:mx-3 md:mx-0'
          >
            <div className='sm:ml-10 md:ml-0'>
              <h1 color={'secondary'} className='md:text-left text-center font-content sm:text-2xl md:text-3xl'>2</h1>
              <h1 className='text-white py-2 text-left'>
                {ServicesPageMetadata.secondServiceTitle}
              </h1>
              <div className='max-w-sm'>
                <div className='text-white font-content'>
                  {ServicesPageMetadata.secondServiceDescription?.content?.[0].content?.[0].value}
                </div>
              </div>
              <h1 className='text-left font-bold font-content py-2'>{ServicesPageMetadata.secondServiceListTitle}</h1>
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
              className='rounded-md'
            />
          </div>
        </div>
      </section>
      <section className='sm:mt-10 md:mt-0'>
        <div className='overflow-hidden h-full lg:pt-[8.35vh] flex flex-col justify-between lg:block'>
          <p className='whitespace-nowrap items-center uppercase font-medium text-[15vw] md:text-[20vw] leading-1'> 
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
              <div className='font-content text-lg md:mb-1'>Step 1</div>
              <div className='text-center font-content max-w-[150px]'>
                {ServicesPageMetadata.step1}
              </div>
            </div>
            <div className='vertical-line' />
            <div color={'secondary'} className='text-white'>
              <div className='font-content text-lg md:mb-1'>Step 2</div>
              <div className='text-center font-content max-w-[150px]'>
                {ServicesPageMetadata.step2}
              </div>
            </div>
            <div className='vertical-line' />
            <div color={'secondary'} className='text-white'>
              <div className='font-content text-lg md:mb-1'>Step 3</div>
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
              className="border-white border rounded-md py-2 px-2"
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

