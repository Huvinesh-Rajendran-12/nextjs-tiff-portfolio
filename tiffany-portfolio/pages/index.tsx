
import Footer from '../components/Footer';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Head from 'next/head';



export default function HomePage(){
    return (
      <div className='flex flex-col'>
          <section className='relative h-[90vh]'>
            <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
            <p className='whitespace-nowrap uppercase font-medium text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
              <span className='text-scrolling'>The Power of Visual Communication</span>
              <span className='text-scrolling'>The Power of Visual Communication</span>
            </p>
            <p className='whitespace-nowrap uppercase font-medium text-[40vw] md:text-[25vw] lg:text-xxl1 leading-1 lg:leading-[15.28vw]'>
              <span className='reverse text-scrolling'>The Power of Visual Communication</span>
              <span></span>
            </p>
            </div>
            <div className='absolute top-10 left-0 flex flex-row justify-center w-full h-full'>
              <img alt='' src={'https://imgix.cosmicjs.com/b177df10-8dba-11ed-bac9-7fe1734a16aa-TC1.jpeg'} className='md:w-1/3 h-[80vh] sm:w-1/2  max-h-200px' />
            </div>
          </section>
          <section className='mx-auto mt-20 mb-10'>
            <div
              className='justify-center flex items-center sm:flex-col md:flex-row sm:gap-y-1 md:gap-x-11'
            >
              <img alt='' src={'https://imgix.cosmicjs.com/743842a0-8e52-11ed-bac9-7fe1734a16aa-logo.png'} className='w-1/12 md:min-w-[15vw]' />
              <div className='gap-y-6 flex flex-col'>
                <div className='text-white lg:max-w-lg'>
                  <i className='text-center text-xl lg:text-2xl'>
                    “In a world where everyone seems to be doing the same thing, it’s time to stand out.”
                  </i>
                </div>
                <div className='text-white lg:max-w-lg'>
                  <p className='lg:text-2xl'>
                    Your brand needs to reflect who you are and what makes you different. That’s why we use design to take your business to new levels by creating a visual identity that complements your brand values, goals and personality.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className='lg:mt-[7.90vh] px-3.5 lg:px-[0.97vw]'>
            <div className='py-2 mt-10'>
              <h1 className='text-5xl flex justify-center text-white'>SELECTED WORK</h1>
            </div>
            <div className=''>
              <div className='flex flex-wrap mx-20'>
                <div className='lg:w-1/2 w-full gap-x-6 pt-2'>
                    <div className='relative'>
                      <img
                        src={'https://imgix.cosmicjs.com/7137bb90-8bdb-11ed-bac9-7fe1734a16aa-RealIsRare1.jpg'}
                        className=''
                        alt='' />
                      <div
                        className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900 hover:opacity-60'
                      >
                        <Link href="/work/page1">
                          VIEW PROJECT
                        </Link>
                      </div>
                    </div>
                    <div className='text-white'>#REALISRARE DIAMOND EXHIBITION </div>
                    <div className='text-white'>2022</div>

                  <div>
                    <div className='relative'>
                      <img alt='' src={'https://imgix.cosmicjs.com/39296d60-8d80-11ed-bac9-7fe1734a16aa-PinkOct1.jpg'} className='w-full' />
                      <div
                        className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900  hover:opacity-60'
                      >
                        <Link href="/work/page2">
                          VIEW PROEJCT
                        </Link>
                      </div>
                    </div>
                    <div className='text-white'>PINK FOR HOPE</div>
                    <div className='text-white'>2022</div>
                  </div>
                </div>
                <div className='lg:w-1/2 w-full gap-x-2 lg:pl-6'>
                  <div>
                    <div className='relative'>
                      <img alt='' src={'https://imgix.cosmicjs.com/49ac1ca0-8d80-11ed-bac9-7fe1734a16aa-Vitavally1.jpeg'} className='w-full' />
                      <div
                        className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900 hover:opacity-60'
                      >
                        <Link href="/work/page3">
                          VIEW PROJECT
                        </Link>
                      </div>
                    </div>
                    <div className='text-white'>VITAVALLY BRANDING</div>
                    <div className='text-white'>2020</div>
                  </div>
                  <div>
                    <div className='relative'>
                      <img alt='' src={'https://imgix.cosmicjs.com/49ac1ca0-8d80-11ed-bac9-7fe1734a16aa-Vitavally1.jpeg'} className='w-full' />
                      <div
                        className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900 hover:opacity-60'
                      >
                        <Link href="/work/page4">
                          VIEW PROJECT
                        </Link>
                      </div>
                    </div>
                    <div className='text-white'>VITAVALLY BRANDING</div>
                    <div className='text-white'>2020</div>
                  </div>
                </div>
                <div className='pt-2'>
                  <div className='relative'>
                    <img alt='' src={'https://imgix.cosmicjs.com/4e91c620-8d80-11ed-bac9-7fe1734a16aa-HalfDayTeaHouse1.jpg'} />
                    <div
                      className='absolute flex w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-zinc-900 hover:opacity-60'
                    >
                      <Link href="/work/page5">
                        VIEW PROJECT
                      </Link>
                    </div>
                  </div>
                  <div className='text-white'>HALF DAY TEA HOUSE</div>
                  <div className='text-white'>2020</div>
                </div>
              </div>
            </div>
          </section>
          <section className='py-10'>
            <div className='py-2'>
              <div className='text-center w-full text-5xl items-center justify-center flex flex-row'>
                <p className='max-w-xl'>BASED IN KUALA LUMPUR, MALAYSIA. AVAILABLE WORLDWIDE.</p>
              </div>
            </div>
            <div
              className='flex flex-row justify-center py-10 items-center gap-x-4'
            >
                <img alt='' src={'https://imgix.cosmicjs.com/79675130-8e52-11ed-bac9-7fe1734a16aa-Pic.jpg'} className='w-1/4' />
              <div className='justify-center'>
                <div className='font-bold text-lg text-white'>Tiffany Chin</div>
                <div className='justify-center items-center'>
                  <div className='text-white text-md' >INDEPENDENT DESIGNER</div>
                  <div className='text-white text-md'>DIGITAL MARKETER</div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='mt-10'>
              <div className='py-2'>
                <div className='relative'>
                  <img alt='' src={'https://imgix.cosmicjs.com/572164d0-8d80-11ed-bac9-7fe1734a16aa-photo2022-10-26-08.23.11.jpeg'} className='w-full' />
                  <div
                    className='absolute flex w-full h-full justify-center items-center top-0 left-0'
                  >
                    <div className='flex overflow-hidden w-full'>
                      <div  className='scrollTextContainerRightToLeft'>
                        <div className='uppercase font-medium text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'>
                          THE POWER OF VISUAL COMMUNICATION .
                        </div>
                        <div className='uppercase font-medium text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'>
                          THE POWER OF VISUAL COMMUNICATION .
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
)}

