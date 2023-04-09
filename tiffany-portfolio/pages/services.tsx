
import ContactButton from '../components/Button';
import { useFontStore, useServicesPageStore } from '../store/store';
import { useEffect } from 'react';
import { getServicesPageData } from '../lib/servicesAPI';
import { Font, type ServicesPage } from '../interfaces'
import { getFontConfig } from '../lib/fontAPI';

interface ServicesPageProps {
  ServicesPageData: ServicesPage[]
  fontAPIData: Font[]
}

export default function ServicesPage({ServicesPageData, fontAPIData}: ServicesPageProps) {
  const ServicesPageMetadata = ServicesPageData[0].metadata
  const fontDataMetadata = fontAPIData[0].metadata
  // const ServicesPageMetadata = useServicesPageStore((state) => state.ServicesPageData?.metadata)
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontDataMetadata.animation.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontDataMetadata.title.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontDataMetadata.content.value ?? ''))
    },[])
  return (
    <div className='flex flex-col'>
      <section>
        <div className='pt-4'>
          <div className='flex justify-center'>
            <h1 className='lg:text-5xl sm:text-3xl font-title'>{ServicesPageMetadata.page_title}</h1>
          </div>
          <div className='flex justify-center'>
            <div className='max-w-md'>
              <p
                className='text-center py-10 text-white font-content lg:max-w-xl sm:max-w-sm font-content md:text-lg sm:text-md'
              >
                {ServicesPageMetadata.page_description}
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
              src={ServicesPageMetadata?.first_pic.imgix_url}
              className='rounded-md'
            />
            <div>
              <h1 className='text-white text-center'>1</h1>
              <h1 className='text-white text-center font-title font-medium py-2'>
                {ServicesPageMetadata.first_pic_title}
              </h1>
              <div className='max-w-sm'>
                <p className='font-content'>
                  {ServicesPageMetadata.first_pic_description}
                </p>
              </div>
              <h1 className='text-center font-title'>{ServicesPageMetadata.first_pic_list_title}</h1>
              <ul className='list-disc ml-6'>
                <li>
                  <div className='font-content'>
                    {ServicesPageMetadata.first_pic_list_item_1}
                  </div>
                </li>
                <li>
                  <div className='font-content'>{ServicesPageMetadata.first_pic_list_item_2}</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>{ServicesPageMetadata.first_pic_list_item_3}</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>{ServicesPageMetadata.first_pic_list_item_4}</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>{ServicesPageMetadata.first_pic_list_item_5}</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>{ServicesPageMetadata.first_pic_list_item_6}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='pt-20'>
          <div
            className='flex-col-reverse lg:flex-row flex items-center justify-center px-3 gap-y-4 md:space-x-10'
          >
            <div className='text-left gap-y-2'>
              <h1 color={'secondary'} className='text-center'>2</h1>
              <h1 className='text-white py-2 text-center'>
                {ServicesPageMetadata.second_pic_title}
              </h1>
              <div className='max-w-sm'>
                <div className='text-white font-content'>
                  {ServicesPageMetadata.second_pic_description}
                </div>
              </div>
              <h1 className='text-center font-title'>{ServicesPageMetadata.second_pic_list_title}</h1>
              <ol className='list-disc ml-6'>
                <li color={'secondary'}>{ServicesPageMetadata.second_pic_list_item_1}</li>
                <li color={'secondary'}>
                  <div className='font-content'>{ServicesPageMetadata.second_pic_list_item_2}</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>{ServicesPageMetadata.second_pic_list_item_3}</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>{ServicesPageMetadata.second_pic_list_item_4}</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>{ServicesPageMetadata.second_pic_list_item_5}</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>{ServicesPageMetadata.second_pic_list_item_6}</div>
                </li>
              </ol>
            </div>
            <img
              alt=""
              src={ServicesPageMetadata?.second_pic.imgix_url}
              className='rounded-md'
            />
          </div>
        </div>
      </section>
      <section>
        <div className='overflow-hidden h-full lg:pt-[8.35vh] flex flex-col space-y-6 justify-between lg:block'>
          <p className='whitespace-nowrap items-center uppercase font-medium text-[15vw] md:text-[20vw] leading-1'> 
            <span className='text-scrolling font-animation'>{ServicesPageMetadata.animation_1}</span>
            <span className='text-scrolling font-animation'>{ServicesPageMetadata.animation_1}</span>
          </p>
        </div>
      </section>
      <section className='py-4'>
        <div
          className='text-2xl text-center justify-center flex flex-row text-white pt-2'
        >
          <p className='font-content text-center py-10 text-white lg:max-w-lg sm:max-w-sm font-content md:text-2xl sm:text-md'>
            {ServicesPageMetadata.customer_message}
          </p>
        </div>
      </section>
      <section>
        
      </section>
    <div className='py-10'>
          
      </div>
      <div className='py-2 px-2 flex-col' >
        <div
          className='flex lg:flex-row flex-col h-14 items-center justify-center text-center gap-x-4 sm:space-y-2 '
        >
          <div color={'secondary'} className='text-white'>
            <div className='font-content text-lg md:mb-1'>Step 1</div>
            <div className='text-center font-content max-w-[150px]'>
              {ServicesPageMetadata.step_1}
            </div>
          </div>
          <div className='vertical-line' />
          <div color={'secondary'} className='text-white'>
            <div className='font-content text-lg md:mb-1'>Step 2</div>
            <div className='text-center font-content max-w-[150px]'>
              {ServicesPageMetadata.step_2}
            </div>
          </div>
          <div className='vertical-line' />
          <div color={'secondary'} className='text-white'>
            <div className='font-content text-lg md:mb-1'>Step 3</div>
            <div className='text-center font-content max-w-[150px]'>
              {ServicesPageMetadata.step_3}
            </div>
          </div>
        </div>
      </div>
        <div className='flex flex-row justify-center md:py-10 sm:py-14 md:mb-10 sm:mb-5'>
          <a href="mailto:imtiffanycfy@gmail.com">
            <ContactButton
              text="Contact Me"
              className="border-white border rounded-md mt-16 py-2 px-2"
            />
          </a>
        </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const ServicesPageData = (await getServicesPageData())
  const fontAPIData = (await getFontConfig())
  return {
    props: {
      ServicesPageData,
      fontAPIData
    }
  }

}

