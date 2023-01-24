
import PrimaryButton from '../../components/Button';
import Link from 'next/link';
import img from 'next/image';
export default function PageFive() {
  return (
    <div className='flex flex-col'>
      <section className='py-10 lg:pt-[9.88vh] lg:pb-[10vh] px-5 lg:px-[8.89vw]'>
        <div className='flex flex-col justify-center text-center'>
          <h1 className='lg:text-5xl sm:text-3xl uppercase'>Pink4Hope</h1>
          <div className='text-white flex flex-row h-8 justify-center gap-x-2'>
            <div className='uppercase'>Brand Identity</div>
            <div className='vertical-line' />
            <div className='uppercase'>Social Media</div>
          </div>
        </div>
      </section>
      <section className='text-2xl text-center justify-center flex flex-row text-white pt-2'>
        <div className='flex flex-col gap-y-8'>
          <p className='max-w-lg'>
              Your brand needs to reflect who you are and what makes you
              different. That’s why I use design to take your business to new
              levels by creating a visual identity that complements your brand
              values, goals and personality. At visual identity design, I will
              take care of all the hard stuff so you can focus on what&aposs
              important.{' '}
          </p>
          <div className='text-white text-center justify-center'>
            <div >Client: Diamond Platinum</div>
            <div >Designer: Tiffany Chin @ D&P</div>
            <div >Developer: D&P Marketing Team</div>
          </div>
        </div>
      </section>
      <section className='flex flex-row justify-center mx-20'>
        <div className='py-20 space-y-10'>
        <img
          alt=""
          src={
            'https://imgix.cosmicjs.com/43f90670-8d7f-11ed-bac9-7fe1734a16aa-HalfDayTeaHouse1.jpg'
          }
          className='w-full lg:w-1/2 block ml-auto mr-auto'
        />
        <img
          alt=""
          src={
            'https://imgix.cosmicjs.com/490571d0-8d7f-11ed-bac9-7fe1734a16aa-HalfDayTeaHouse2.jpg'
          }
          className='w-full lg:w-1/2 block ml-auto mr-auto'
        />
        <img
          alt=""
          src={
            'https://imgix.cosmicjs.com/51f24bb0-8d7f-11ed-bac9-7fe1734a16aa-HalfDayTeaHouse3.jpg'
          }
          className='w-full lg:w-1/2 block ml-auto mr-auto'
        />
        <img
          alt=""
          src={
            'https://imgix.cosmicjs.com/5f8443a0-8d7f-11ed-bac9-7fe1734a16aa-HalfDayTeaHouse4.jpg'
          }
          className='w-full lg:w-1/2 block ml-auto mr-auto'
        />
        </div>
      </section>
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
              <img alt='' src={'https://imgix.cosmicjs.com/2dd22bb0-8bea-11ed-bac9-7fe1734a16aa-RealIsRare1.jpg'} className='md:w-1/3 h-[80vh] sm:w-1/2  max-h-200px' />
            </div>
      </section>
    </div>
  );
}
