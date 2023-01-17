
import Link from 'next/link';
import PrimaryButton from '../../components/Button';
import img from 'next/image';

export default function PageThree() {
  return (
    <div className='bg-black h-screen'>
      <div className='py-2'>
        <div>
          <h1
            className='text-white text-2xl'
          >
            Page 3
          </h1>
          <div className='text-white gap-x-2'>
            <div>tag 1</div>
            <div className='vertical-line' />
            <div>tag 2</div>
          </div>
        </div>
      </div>
      <div>
        <div className='gap-y-2'>
          <div className='text-sm'>
            <p className='text-center text-white'>
              Your brand needs to reflect who you are and what makes you
              different. That’s why I use design to take your business to new
              levels by creating a visual identity that complements your brand
              values, goals and personality. At visual identity design, I will
              take care of all the hard stuff so you can focus on what&aposs
              important.{' '}
            </p>
          </div>
          <div className='text-white gap-2'>
            <div >Client: Diamond Platinum</div>
            <div >Designer: Tiffany Chin @ D&P</div>
            <div >Developer: D&P Marketing Team</div>
          </div>
        </div>
      </div>
      <div className='py-2'>
        <img
          alt=""
          src={
            'https://imgix.cosmicjs.com/abb42a30-8c10-11ed-bac9-7fe1734a16aa-TC1.jpeg'
          }
        />
        <img
          alt=""
          src={
            'https://imgix.cosmicjs.com/abb42a30-8c10-11ed-bac9-7fe1734a16aa-TC1.jpeg'
          }
        />
      </div>
      <div className='relative py-4'>
        <div>
          <span
            className="white-text left-to-right block whitespace-nowrap"
          >
            VITAVALLY BRANDING
          </span>
          <span
            className="white-text left-to-right block whitespace-nowrap"
          >
            CLICK TO VIEW NEXT PROJECT
          </span>
        </div>
        <div className='absolute top-0 left-0 h-full'>
          <img
            alt=""
            src={
              'https://imgix.cosmicjs.com/ca11b9e0-8c13-11ed-bac9-7fe1734a16aa-Vitavally1.jpeg'
            }
          />
          <div
            className='relative w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-black-600 hover:opacity-1'

          >
            <Link href="/work/vitavally">VIEW PROJECT</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
