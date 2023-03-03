import { ReactElement, useEffect } from 'react';
import img from 'next/image';
import Link from 'next/link';
import PrimaryButton from '../components/Button';
import { useFontStore } from '../store/store';
import { getWorkPageData } from '../lib/workAPI';
import { WorkPage } from '../interfaces';

interface WorkPageProps {
  WorkPageData: WorkPage[]
}

export default function Work({WorkPageData}:WorkPageProps) {
  const fontStore = useFontStore((state) => state.font)
  console.log(fontStore?.metadata.title.value)
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.font-animation')?.forEach((e) => e.style.setProperty('--font-animation', fontStore?.metadata.animation.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-title')?.forEach((e) => e.style.setProperty('--font-title', fontStore?.metadata.title.value ?? ''))
    document.querySelectorAll<HTMLElement>('.font-content')?.forEach((e) => e.style.setProperty('--font-content', fontStore?.metadata.content.value ?? ''))
    },[])
  return (
    <div className='flex flex-col'>
      <section>
        <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
          <p className='whitespace-nowrap uppercase font-medium text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
              <span className='text-scrolling font-animation'>The Power of Visual Communication</span>
              <span className='text-scrolling font-animation'>The Power of Visual Communication</span>
          </p>
        </div>
      </section>
      <section>
        <div className="container lg:px-32 px-4 py-8 mx-auto items-center ">
          <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
            <div className="w-full row-span-2">
              <Link href='/work/page1'>
              <img
                src={WorkPageData[0].metadata.page_1_pic_1.imgix_url}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"/>
              </Link>
            </div>
            <div className="w-full col-span-2 row-span-2">
              <Link href='/work/page2'>
              <img
                src={WorkPageData[0].metadata.page_2_pic_1.imgix_url}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
              </Link>
            </div>
            <div className="w-full ">
              <img
                src={""}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
            </div>
            <div className="w-full">
              <Link href='/work/page3'>
              <img
                src={WorkPageData[0].metadata.page_3_pic_1.imgix_url}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
              </Link>
            </div>
            <div className="w-full col-span-2 row-span-2">
              <Link href='/work/page4'>
              <img
                src={WorkPageData[0].metadata.page_4_pic_1.imgix_url}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
              </Link>
            </div>
            <div className="w-full col-span-2">
              <Link href='/work/page5'>
              <img
                src={WorkPageData[0].metadata.page_5_pic_1.imgix_url}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
              </Link>
            </div>
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
            </div>
            <div className="w-full">
              <Link href='/work/page3'>
              <img
                src={WorkPageData[0].metadata.page_3_pic_1.imgix_url}
                alt="Photo by Claudio Schwarz on Unsplash"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
          <p className='whitespace-nowrap uppercase font-medium text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
              <span className='text-scrolling font-animation'>The Power of Visual Communication</span>
              <span className='text-scrolling font-animation'>The Power of Visual Communication</span>
          </p>
        </div>
      </section>
</div>

  );
}

export const getStaticProps = async () => {
  const WorkPageData = (await getWorkPageData())
  return {
    props: {
      WorkPageData
    }
  }

}