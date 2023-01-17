
import PrimaryButton from '../../components/Button';
import Link from 'next/link';
import img from 'next/image';

export default function PageOne() {
  return (
    <div className="min-h-screen bg-black">
      <div className="py-2 text-center">
        <div>
          <h1 className='lg:text-5xl sm:text-3xl'>#REALISRARE DIAMOND EXHIBITION</h1>
          <div className='text-white flex flex-row justify-center gap-x-2'>
            <div>MARKETING CAMPAIGN</div>
            <div className='vertical-line' />
            <div>SOCIAL MEDIA</div>
          </div>
        </div>
      </div>
      <div>
        <div className="gap-2 flex justify-center">
          <div className='flex-col'>
            <div className='max-w-sm '>
              <p className='text-white text-center'>
                Your brand needs to reflect who you are and what makes you
                different. That’s why I use design to take your business to new
                levels by creating a visual identity that complements your brand
                values, goals and personality. At visual identity design, I will
                take care of all the hard stuff so you can focus on what&aposs
                important.{' '}
              </p>
            </div>
            <div className='text-white text-left justify-center'>
              <div >Client: Diamond Platinum</div>
              <div >Designer: Tiffany Chin @ D&P</div>
              <div >Developer: D&P Marketing Team</div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center py-10'>
        <img
          alt=""
          src={
            'https://imgix.cosmicjs.com/2dd22bb0-8bea-11ed-bac9-7fe1734a16aa-RealIsRare1.jpg'
          }
          className='w-1/3'
          />
        <img
          alt=""
          src={
            'https://imgix.cosmicjs.com/43bcfae0-8bea-11ed-bac9-7fe1734a16aa-RealIsRare2.jpg'
          }
          className='w-1/3'
          />
            <img
          alt=""
          src={
            'https://imgix.cosmicjs.com/54430580-8bea-11ed-bac9-7fe1734a16aa-RealIsRare3.jpg'
          }
          className='w-1/3'
          />
        
      </div>
        <div className='relative py-4'>
        <div >
          <span
            className="white-text left-to-right block whiteSpace text-white whitespace-nowrap"
          >
            T&C PERSONAL BRANDING . T&C PERSONAL BRANDING
          </span>
          <span
            className="white-text left-to-right block whiteSpace text-white whitespace-nowrap"
          >
            CLICK TO VIEW NEXT PROJECT
          </span>
        </div>
        <div className='absolute top-0 left-0 h-full' >
          <img
            alt=""
            src={
              'https://imgix.cosmicjs.com/7e055ed0-8beb-11ed-bac9-7fe1734a16aa-PinkOct1.jpg'
            }
            className='w-1/3'
          />
          <div
            className='relative w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-black-600 hover:opacity-1'
          >
            <Link href="/work/page/2">VIEW PROJECT</Link>
          </div>
        </div>
        </div>
    </div>
  );
}
