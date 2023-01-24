
import ContactButton from '../components/Button';
import img from 'next/image';

export default function ServicesPage() {
  return (
    <div className='flex flex-col'>
      <section>
        <div className='pt-4'>
          <div className='flex justify-center'>
            <h1 className='text-5xl'>SERVICES</h1>
          </div>
          <div className='flex justify-center'>
            <div className='max-w-md'>
              <p
                className='text-center text-lg py-10 text-white'
              >
                Your brand needs to reflect who you are and what makes you
                different. That’s why I use design to take your business to new
                levels by creating a visual identity that complements your brand
                values, goals and personality. At visual identity design, I will
                take care of all the hard stuff so you can focus on what's
                important.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='pt-3'>
          <div
            className='flex-col lg:flex-row flex items-center justify-center px-3 gap-y-4 space-x-10'
          >
            <img
              alt=""
              src={'https://imgix.cosmicjs.com/280428d0-8dbd-11ed-bac9-7fe1734a16aa-McGotcha1.jpeg'}
              className='rounded-md'
            />
            <div>
              <h1 className='text-white'>1</h1>
              <h1 className='text-white font-medium py-2'>
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
              <ul className='list-disc ml-6'>
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
      </section>
      <section>
        <div className='pt-20'>
          <div
            className='px-4 space-x-10 flex flex-col-reverse lg:flex-row items-center pb-2 justify-center'
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
              <ol className='list-disc ml-6'>
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
              </ol>
              
            </div>
            <img
              alt=""
              src={'https://imgix.cosmicjs.com/2c2fd120-8dbd-11ed-bac9-7fe1734a16aa-McGotcha2.jpeg'}
              className='rounded-md'
            />
          </div>
        </div>
      </section>
      <section>
        <div className='overflow-hidden h-full lg:pt-[12.35vh] flex flex-col space-y-6 justify-between lg:block'>
          <p className='whitespace-nowrap uppercase font-medium text-[30vw] md:text-[25vw] pb-8 lg:text-xxl1 leading-1 lg:leading-[15.28vw]'> 
            <span className='text-scrolling'>The Power of Visual Communication</span>
            <span className='text-scrolling'>The Power of Visual Communication</span>
          </p>
        </div>
      </section>
      <section className='py-10'>
        <div
          className='text-2xl text-center justify-center flex flex-row text-white pt-2'
        >
          <p className='max-w-sm'>
            Are you launching a new business or rebranding an existing ones? Do
            you want to transform your social media presence? Let’s talk.
          </p>
        </div>
      </section>
    <div className='py-2'>
          
      </div>
      <div className='py-2 px-2 flex-col' >
        <div
          className='flex lg:flex-row flex-col h-14 items-center justify-center text-center gap-x-2 '
        >
          <div color={'secondary'} className='text-white'>
            <div>Step 1</div>
            <div className='text-center max-w-[150px]'>
              Identify your business goals.
            </div>
          </div>
          <div className='vertical-line' />
          <div color={'secondary'} className='text-white'>
            <div>Step 2</div>
            <div className='text-center max-w-[150px]'>
              Creative direction and development.
            </div>
          </div>
          <div className='vertical-line' />
          <div color={'secondary'} className='text-white'>
            <div>Step 3</div>
            <div className='text-center max-w-[150px]'>
              Implementation and finalize.
            </div>
          </div>
        </div>
      </div>
        <div className='flex flex-row justify-center py-10'>
          <a href="mailto:imtiffanycfy@gmail.com">
            <ContactButton
              text="Contact Me"
              bg="primary"
              border={1}
              borderColor="secondary" />
          </a>
        </div>
    </div>
  );
}
