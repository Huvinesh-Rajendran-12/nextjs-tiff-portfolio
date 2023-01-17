
import Footer from '../components/Footer';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Head from 'next/head';



export default function HomePage(){
    return (
      <div className='min-h-screen bg-black'>
          <div className='relative py-20 mt-6'>
            <div className='w-full overflow-hidden flex flex-row'>
              <div className='scrollTextContainerRightToLeft'>
                <div className='text-white text-2xl'>
                  THE POWER OF VISUAL COMMUNICATION .
                </div>
                <div className='text-white text-2xl'>
                  THE POWER OF VISUAL COMMUNICATION .
                </div>
              </div>
            </div>
            <div className='flex overflow-hidden w-full'>
              <div  className='scrollTextContainerLeftToRight'>
                <div className='text-white text-2xl'>
                  THE POWER OF VISUAL COMMUNICATION .
                </div>
                <div className='text-white text-2xl'>
                  THE POWER OF VISUAL COMMUNICATION .
                </div>
              </div>
            </div>
            <div className='absolute top-0 left-0 flex flex-row justify-center w-full h-full'>
              <img alt='' src={'https://imgix.cosmicjs.com/b177df10-8dba-11ed-bac9-7fe1734a16aa-TC1.jpeg'} className='w-1/3  max-h-200px' />
            </div>
          </div>
          <div className='px-3 mt-20'>
            <div
              className='justify-center flex items-center sm:flex-col md:flex-row sm:gap-y-1 md:gap-x-2'
            >
              <img alt='' src={'https://imgix.cosmicjs.com/743842a0-8e52-11ed-bac9-7fe1734a16aa-logo.png'} className='w-1/12' />
              <div className='gap-y-4 flex flex-col'>
                <div className='text-white max-w-sm'>
                  <i className='text-center text-md'>
                    “In a world where everyone seems to be doing the same thing, it’s time to stand out.”
                  </i>
                </div>
                <div className='text-white max-w-sm'>
                  <p className='text-md'>
                    Your brand needs to reflect who you are and what makes you different. That’s why we use design to take your business to new levels by creating a visual identity that complements your brand values, goals and personality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <div className='py-4 mt-10'>
              <h1 className='text-2xl flex justify-center text-white'>SELECTED WORK</h1>
            </div>
            <div className='flex flex-row mx-20'>
              <div className='flex-wrap flex'>
                <div className='basis-1/2 sm:basis-0 gap-x-6 pt-2'>
                  <div>
                    <div className='relative'>
                      <img
                        src={'https://imgix.cosmicjs.com/7137bb90-8bdb-11ed-bac9-7fe1734a16aa-RealIsRare1.jpg'}
                        className=''
                        alt='' />
                      <div
                        className='relative w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-black-600 hover:opacity-1'
                      >
                        <Link href="/work/page/1">
                          VIEW PROJECT
                        </Link>
                      </div>
                    </div>
                    <div className='text-white'>#REALISRARE DIAMOND EXHIBITION </div>
                    <div className='text-white'>2022</div>
                  </div>
                  <div>
                    <div className='relative'>
                      <img alt='' src={'https://imgix.cosmicjs.com/39296d60-8d80-11ed-bac9-7fe1734a16aa-PinkOct1.jpg'} className='w-full' />
                      <div
                        className='relative w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-black-600 hover:opacity-1'
                      >
                        <Link href="/work/page/2">
                          VIEW PROEJCT
                        </Link>
                      </div>
                    </div>
                    <div className='text-white'>PINK FOR HOPE</div>
                    <div className='text-white'>2022</div>
                  </div>
                </div>
                <div className='basis-1/2 gap-x-2 pl-6'>
                  <div>
                    <div className='relative'>
                      <img alt='' src={'https://imgix.cosmicjs.com/49ac1ca0-8d80-11ed-bac9-7fe1734a16aa-Vitavally1.jpeg'} />
                      <div
                        className='relative w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-black-600 hover:opacity-1'
                      >
                        <Link href="/work/page/4">
                          VIEW PROJECT
                        </Link>
                      </div>
                    </div>
                    <div className='text-white'>VITAVALLY BRANDING</div>
                    <div className='text-white'>2020</div>
                  </div>
                  <div>
                    <div className='relative'>
                      <img alt='' src={'https://imgix.cosmicjs.com/49ac1ca0-8d80-11ed-bac9-7fe1734a16aa-Vitavally1.jpeg'} />
                      <div
                        className='relative w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-black-600 hover:opacity-1'
                      >
                        <Link href="/work/page/4">
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
                      className='relative w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-black-600 hover:opacity-1'
                    >
                      <Link href="/work/page/5">
                        VIEW PROJECT
                      </Link>
                    </div>
                  </div>
                  <div className='text-white'>HALF DAY TEA HOUSE</div>
                  <div className='text-white'>2020</div>
                </div>
              </div>
            </div>
            <div className='py-2'>
              <div className='text-center w-full text-2xl items-center justify-center flex flex-row'>
                <p className='max-w-sm'>BASED IN KUALA LUMPUR, MALAYSIA. AVAILABLE WORLDWIDE.</p>
              </div>
            </div>
            <div
              className='flex flex-row justify-center items-center gap-x-4'
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
            <div className='py-2'>
              <div className='relative'>
                <img alt='' src={'https://imgix.cosmicjs.com/572164d0-8d80-11ed-bac9-7fe1734a16aa-photo2022-10-26-08.23.11.jpeg'} />
                <div
                  className='absolute flex w-full h-full justify-center items-center top-0 left-0'
                >
                  <div className='flex overflow-hidden w-full'>
                    <div  className='scrollTextContainerRightToLeft'>
                      <div className='text-white text-5xl'>
                        THE POWER OF VISUAL COMMUNICATION .
                      </div>
                      <div className='text-white text-5xl'>
                        THE POWER OF VISUAL COMMUNICATION .
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
)}

