import { useEffect } from "react";
import { getAboutPageData } from "./api/api";
import { type AboutPage } from '../interfaces'
import { getFontData } from "./api/api";
import { Entry } from "contentful";
import { TypeAboutPage, TypeFont } from "../interfaces/contentful";

type AboutPageProps = {
    fontAPIData: Entry<TypeFont>
    AboutPageData : Entry<TypeAboutPage>
}

export default function AboutPage({fontAPIData,AboutPageData}: AboutPageProps) {
  const AboutPageMetadata = AboutPageData.fields
  const fontAPIMetadata = fontAPIData.fields
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontAPIMetadata.animationFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontAPIMetadata.titleFont ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontAPIMetadata.contentFont ?? ''))
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
                    <img alt='' src={AboutPageMetadata.userProfilePic?.fields.file.url} className='w-1/4 rounded-md min-w-[300px]' />
                </div>
            </section>
            <section>
                <div className='pt-8 flex justify-center'>
                   <div className='flex flex-col justify-center text-center'>
                        <h1 className='lg:text-2xl sm:text-md font-title mb-2'>{AboutPageMetadata.userName}</h1>
                        <div className='text-white flex sm:flex-col md:flex-row h-6 justify-center mt-0 sm:mt-5 gap-x-2'>
                            <div className='uppercase font-content max-w-md'>{AboutPageMetadata.userTag1}</div>
                            <div className='vertical-line' />
                            <div className='uppercase font-content max-w-md'>{AboutPageMetadata.userTag2}</div>
                        </div>
                     </div>
                </div>
            </section>
           <section className='mx-auto sm:mx-20 mt-20 mb-10'>
            <div
              className='justify-center flex items-center sm:flex-col md:flex-row sm:gap-y-1 md:gap-x-11'
            >
              <img alt='' src={AboutPageMetadata.logo?.fields.file.url} className='w-1/12 lg:max-w-[50px] md:min-w-[15vw] sm:min-w-[70px]' />
              <div className='gap-y-6 flex flex-col'>
                <div className='text-white lg:max-w-xl md:max-w-sm'>
                  <p className='lg:text-lg sm:text-md font-content sm:text-left md:text-left'>
                    {AboutPageMetadata.description?.content?.[0].content?.[0].value}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
              <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
                  <p className='whitespace-nowrap mb-12 uppercase font-medium text-[30vw] md:text-[20vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
                      <span className='text-scrolling font-animation'>{AboutPageMetadata.animation}</span>
                      <span className='text-scrolling font-animation'>{AboutPageMetadata.animation}</span>
                  </p>
              </div>
          </section>
        </div>
  )
}

export const getStaticProps = async () => {
  const fontAPIData = (await getFontData())
  const AboutPageData = (await getAboutPageData())
  return {
    props: {
      AboutPageData,
      fontAPIData
    }
  }

}
