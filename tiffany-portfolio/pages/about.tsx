import img from "next/image"
import { useEffect } from "react";
import { Font } from "../interfaces";
import { getAboutPageData } from "../lib/aboutAPI";
import { useAboutPageStore, useFontStore } from '../store/store';
import { type AboutPage } from '../interfaces'

type AboutPageProps = {
    AboutPageData : AboutPage[]
}

export default function AboutPage({AboutPageData}: AboutPageProps) {
  const fontStore = useFontStore((state) => state.font)
  const addAboutPageData = useAboutPageStore((state) => state.addAboutPageData)
  addAboutPageData(AboutPageData[0])
  const AboutPageMetadata = useAboutPageStore((state) => state.AboutPageData?.metadata)
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontStore?.metadata.animation.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontStore?.metadata.title.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontStore?.metadata.content.value ?? ''))
    },[])
  return (
        <div className='flex flex-col'>
            <section>
                <div className='py-8 text-center flex justify-center'>
                    <div>
                        <h1 className='text-white text-5xl font-title'>
                            ABOUT
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex justify-center">
                    <img alt='' src={AboutPageMetadata?.profile_picture.imgix_url} className='w-1/4 rounded-md min-w-[300px]' />
                </div>
            </section>
            <section>
                <div className='pt-2 flex justify-center'>
                   <div className='flex flex-col justify-center text-center space-y-2'>
                        <h1 className='lg:text-2xl sm:text-md font-title'>{AboutPageMetadata?.user_name}</h1>
                        <div className='text-white flex flex-row h-6 justify-center gap-x-2'>
                            <div className='uppercase font-content'>{AboutPageMetadata?.tag_1}</div>
                            <div className='vertical-line' />
                            <div className='uppercase font-content'>{AboutPageMetadata?.tag_2}</div>
                        </div>
                     </div>
                </div>
            </section>
           <section className='mx-auto sm:mx-20 mt-20 mb-10'>
            <div
              className='justify-center flex items-center sm:flex-col md:flex-row sm:gap-y-1 md:gap-x-11'
            >
              <img alt='' src={AboutPageMetadata?.logo.imgix_url} className='w-1/12 md:min-w-[15vw] sm:min-w-[70px]' />
              <div className='gap-y-6 flex flex-col'>
                <div className='text-white lg:max-w-xl'>
                  <p className='lg:text-2xl font-content'>
                    {AboutPageMetadata?.description}
                  </p>
                </div>
              </div>
            </div>
          </section>
            <section>
                <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
                    <p className='whitespace-nowrap mb-6 uppercase font-medium text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
                        <span className='text-scrolling font-animation'>{AboutPageMetadata?.animation_1}</span>
                        <span className='text-scrolling font-animation'>{AboutPageMetadata?.animation_1}</span>
                    </p>
                </div>
            </section>
            {/* <div  className='flex overflow-hidden'>
                <div  className='scrollTextContainerRightToLeft'>
                    <div  className='text-white text-xl'>
                    i help you move forward with design & creativity
                    </div>
                    <div className='text-white text-xl'>
                    i help you move forward with design & creativity
                    </div>
                </div>
            </div> */}
        </div>
  )
}

export const getStaticProps = async () => {
  const AboutPageData = (await getAboutPageData())
  return {
    props: {
      AboutPageData
    }
  }

}
