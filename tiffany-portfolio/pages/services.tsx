
import ContactButton from '../components/Button';
import { useFontStore, useServicesPageStore } from '../store/store';
import { useEffect } from 'react';
import { getServicesPageData } from '../lib/servicesAPI';
import { type ServicesPage } from '../interfaces'

interface ServicesPageProps {
  ServicesPageData: ServicesPage[]
}

export default function ServicesPage({ServicesPageData}: ServicesPageProps) {
  const addServicesPageData = useServicesPageStore((state) => state.addServicesPageData)
  addServicesPageData(ServicesPageData[0])
  const fontStore = useFontStore((state) => state.font)
  const ServicesPageMetadata = useServicesPageStore((state) => state.ServicesPageData?.metadata)
  console.log(fontStore?.metadata.title.value)
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontStore?.metadata.animation.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontStore?.metadata.title.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontStore?.metadata.content.value ?? ''))
    },[])
  return (
    <div className='flex flex-col'>
      <section>
        <div className='pt-4'>
          <div className='flex justify-center'>
            <h1 className='text-5xl font-title'>SERVICES</h1>
          </div>
          <div className='flex justify-center'>
            <div className='max-w-md'>
              <p
                className='text-center text-lg py-10 text-white font-content'
              >
                Your brand needs to reflect who you are and what makes you
                different. That’s why I use design to take your business to new
                levels by creating a visual identity that complements your brand
                values, goals and personality. At visual identity design, I will
                take care of all the hard stuff so you can focus on what's
                important.
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
                BRAND IDENTITY
              </h1>
              <div className='max-w-sm'>
                <p className='font-content'>
                  Your brand needs to reflect who you are and what makes you
                  different. That’s why I use design to take your business to new
                  levels by creating a visual identity that complements your brand
                  values, goals and personality.
                </p>
              </div>
              <h1 className='text-center font-title'>BRAND ASSETS</h1>
              <ul className='list-disc ml-6'>
                <li>
                  <div className='font-content'>
                    Brand Moodboard
                  </div>
                </li>
                <li>
                  <div className='font-content'>Logo + Brand Mark</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>Business Card Design</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>Brand Icons</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>Creative Direction</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>Printed + Digital Collateral</div>
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
                BRAND IDENTITY
              </h1>
              <div className='max-w-sm'>
                <div className='text-white font-content'>
                  Your brand needs to reflect who you are and what makes you
                  different. That’s why I use design to take your business to new
                  levels by creating a visual identity that complements your brand
                  values, goals and personality.
                </div>
              </div>
              <h1 className='text-center font-title'>BRAND ASSETS</h1>
              <ol className='list-disc ml-6'>
                <li color={'secondary'}>Brand Moodboard</li>
                <li color={'secondary'}>
                  <div className='font-content'>Logo + Brand Mark</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>Business Card Design</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>Brand Icons</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>Creative Direction</div>
                </li>
                <li color={'secondary'}>
                  <div className='font-content'>Printed + Digital Collateral</div>
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
            <span className='text-scrolling font-animation'>The Power of Visual Communication</span>
            <span className='text-scrolling font-animation'>The Power of Visual Communication</span>
          </p>
        </div>
      </section>
      <section className='py-4'>
        <div
          className='text-2xl text-center justify-center flex flex-row text-white pt-2'
        >
          <p className='max-w-lg font-content'>
            Are you launching a new business or rebranding an existing ones? Do
            you want to transform your social media presence? Let’s talk.
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
              Identify your business goals.
            </div>
          </div>
          <div className='vertical-line' />
          <div color={'secondary'} className='text-white'>
            <div className='font-content text-lg md:mb-1'>Step 2</div>
            <div className='text-center font-content max-w-[150px]'>
              Creative direction and development.
            </div>
          </div>
          <div className='vertical-line' />
          <div color={'secondary'} className='text-white'>
            <div className='font-content text-lg md:mb-1'>Step 3</div>
            <div className='text-center font-content max-w-[150px]'>
              Implementation and finalize.
            </div>
          </div>
        </div>
      </div>
        <div className='flex flex-row justify-center py-10 mb-10'>
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
  return {
    props: {
      ServicesPageData
    }
  }

}