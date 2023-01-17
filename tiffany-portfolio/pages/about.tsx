import img from "next/image"

export default function AboutPage() {
  return (
        <div className='bg-black min-h-screen'>
            <div className='py-8 text-center flex justify-center'>
                <div>
                    <h1 className='text-white text-2xl'>
                        ABOUT
                    </h1>
                </div>
            </div>
            <div className="flex justify-center">
                    <img alt='' src={'https://imgix.cosmicjs.com/79675130-8e52-11ed-bac9-7fe1734a16aa-Pic.jpg'} className='w-1/4 rounded-md' />
            </div>
            <div className='pt-2 flex justify-center'>
                <div className="flex-col text-center">
                <div className="mb-4">
                    <h1 className='text-white text-xl'>
                        TIFFANY C.
                    </h1>
                </div>
                <div className='pt-4'>
                    <div className="flex-row flex space-x-2">
                        <div autoCapitalize={'true'} className='text-white'>INDEPENDENT GRAPHIC DESIGNER</div>
                        <div className='vertical-line'></div>
                        <div className='text-white'>DIGITAL MARKETER</div>
                    </div>
                </div>
                </div>
            </div>
            <div className='py-4 px-4'>
                    <div 
                        className='flex flex-row justify-center items-center'
                    >
                        <img alt='' src={'https://imgix.cosmicjs.com/743842a0-8e52-11ed-bac9-7fe1734a16aa-logo.png'} className='w-1/5' />
                        <div className='text-white max-w-sm'>
                            An established and versatile graphic designer and marketing professional, who is highly self-motivated and enjoys working with clients. Throughout the years, Tiffany’s passion for design and marketing has led her to add massive creative ideas to her client’ businesses. She crafts and cultivates the company’s brand identity, and designs visually appealing promotional materials. Her favourite creative design tools are Adobe Illustrator, Photoshop, and Premiere Pro, allowing her to stay ahead of the tech curve and produce
                            visually stunning results.
                        </div>
                    </div>
            </div>
            <div  className='flex overflow-hidden'>
                <div  className='scrollTextContainerRightToLeft'>
                    <div  className='text-white text-xl'>
                    i help you move forward with design & creativity
                    </div>
                    <div className='text-white text-xl'>
                    i help you move forward with design & creativity
                    </div>
                </div>
            </div>
        </div>
  )
}
