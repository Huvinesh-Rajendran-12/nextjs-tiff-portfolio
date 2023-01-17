
import PrimaryButton from '../../components/Button';
import Link from 'next/link';
import img from 'next/image';
export default function PageTwo() {
  return (
    <div className='bg-black grid place-items-center h-screen'>
      <div className='py-2'>
        <div>
          <h1>Pink4Hope</h1>
          <div className='text-white gap-x-2'>
            <div>Brand Identity</div>
            <div className='vertical-line' />
            <div>Social Media</div>
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
          <div className='text-white'>
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
            'https://imgix.cosmicjs.com/7e055ed0-8beb-11ed-bac9-7fe1734a16aa-PinkOct1.jpg'
          }
        />
        <img
          alt=""
          src={
            'https://imgix.cosmicjs.com/8da57640-8beb-11ed-bac9-7fe1734a16aa-PinkOct2.jpeg'
          }
        />
        <img
          alt=""
          src={
            'https://imgix.cosmicjs.com/92e94550-8beb-11ed-bac9-7fe1734a16aa-PinkOct3.jpg'
          }
        />
      </div>
      <div className='py-2 relative'>
        <div>
          <span
            className="white-text left-to-right block whitespace-nowrap"
          >
            PINK FOR HOPE CAMPAIGN
          </span>
          <span
            className="white-text right-to-left whitespace-nowrap block"
          >
            CLICK TO VIEW NEXT PROJECT
          </span>
        </div>
        <div className='absolute top-0 left-0 h-full'>
          <img
            alt=""
            src={
              'https://imgix.cosmicjs.com/abb42a30-8c10-11ed-bac9-7fe1734a16aa-TC1.jpeg'
            }
          />
          <div
            className='relative w-full h-full top-0 left-0 opacity-0 text-white justify-center items-center bg-black-600 hover:opacity-1'

          >
            <Link href="/work/tnc">VIEW PROJECT</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
