
import ContactButton from '../components/Button';
import img from 'next/image';

export default function ServicesPage() {
  return (
    <div className='bg-black'>
      <div className='pt-4'>
        <div className='flex justify-center'>
          <h1>SERVICES</h1>
        </div>
        <div className='flex justify-center'>
          <div className='max-w-sm'>
            <p
              className='text-center  pt-2 text-white'
            >
              Your brand needs to reflect who you are and what makes you
              different. That’s why I use design to take your business to new
              levels by creating a visual identity that complements your brand
              values, goals and personality. At visual identity design, I will
              take care of all the hard stuff so you can focus on what$aposs
              important.
            </p>
          </div>
        </div>
      </div>
      <div className='pt-3'>
        <div
          className='flex-row flex items-center justify-center px-3 gap-x-2'
        >
          <img
            alt=""
            src={'https://imgix.cosmicjs.com/280428d0-8dbd-11ed-bac9-7fe1734a16aa-McGotcha1.jpeg'}
          />
          <div>
            <h1 className='text-white'>1</h1>
            <h1 className='text-white py-2'>
              BRAND IDENTITY
            </h1>
            <div className='max-w-sm'>
              <p color={'secondary'}>
                Your brand needs to reflect who you are and what makes you
                different. That’s why I use design to take your business to new
                levels by creating a visual identity that complements your brand
                values, goals and personality.
              </p>
            </div>
            <h1>BRAND ASSETS</h1>
            <ul>
              <li>Brand Moodboard</li>
              <li>
                <div>Logo + Brand Mark</div>
              </li>
              <li color={'secondary'}>
                <div>Business Card Design</div>
              </li>
              <li color={'secondary'}>
                <div>Brand Icons</div>
              </li>
              <li color={'secondary'}>
                <div>Creative Direction</div>
              </li>
              <li color={'secondary'}>
                <div>Printed + Digital Collateral</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='pt-4'>
        <div
          className='px-4 flex flex-row items-center pb-2 justify-center'
        >
          <div className='text-left'>
            <h1 color={'secondary'}>2</h1>
            <h1 className='text-white py-2'>
              BRAND IDENTITY
            </h1>
            <div className='max-w-sm'>
              <div color={'secondary'} className='text-white'>
                Your brand needs to reflect who you are and what makes you
                different. That’s why I use design to take your business to new
                levels by creating a visual identity that complements your brand
                values, goals and personality.
              </div>
            </div>
            <h1>BRAND ASSETS</h1>
            <ul>
              <li color={'secondary'}>Brand Moodboard</li>
              <li color={'secondary'}>
                <div>Logo + Brand Mark</div>
              </li>
              <li color={'secondary'}>
                <div>Business Card Design</div>
              </li>
              <li color={'secondary'}>
                <div>Brand Icons</div>
              </li>
              <li color={'secondary'}>
                <div>Creative Direction</div>
              </li>
              <li color={'secondary'}>
                <div>Printed + Digital Collateral</div>
              </li>
            </ul>
          </div>
          <img
            alt=""
            src={'https://imgix.cosmicjs.com/2c2fd120-8dbd-11ed-bac9-7fe1734a16aa-McGotcha2.jpeg'}
          />
        </div>
      </div>
      <div className='w-full overflow-hidden flex'>
        <div className='scrollTextdivRightToLeft'>
          <div className='text-white text-2xl'>
            THE POWER OF VISUAL COMMUNICATION .
          </div>
          <div className='text-white text-2xl'>
            THE POWER OF VISUAL COMMUNICATION .
          </div>
        </div>
      </div>
    <div className='py-2'>
        <div>
          <div
            className='text-2xl text-center text-white pt-2'
          >
            Are you launching a new business or rebranding an existing ones? Do
            you want to transform your social media presence? Let’s talk.
          </div>
        </div>
      </div>
      <div className='py-2 px-2 flex-col' >
        <div
          className='flex-row gap-x-2 '
        >
          <div color={'secondary'} className='text-white'>
            <div>Step 1</div>
            <div className='text-center max-w-sm'>
              Identify your business goals.
            </div>
          </div>
          <hr className='vertical-line' />
          <div color={'secondary'} className='text-white'>
            <div>Step 2</div>
            <div className='text-center max-w-sm'>
              Creative direction and development.
            </div>
          </div>
          <hr className='vertical-line' />
          <div color={'secondary'} className='text-white'>
            <div>Step 3</div>
            <div className='text-center max-w-sm'>
              Implementation and finalize.
            </div>
          </div>
        </div>
        <div className='py-2'>
          <a href="mailto:imtiffanycfy@gmail.com">
            <ContactButton
              text="Contact Me"
              bg="primary"
              border={1}
              borderColor="secondary" />
          </a>
        </div>
      </div>
    </div>
  );
}
