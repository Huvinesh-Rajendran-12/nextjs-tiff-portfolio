import {
    Icon    } from '@chakra-ui/react'
    import { FaInstagram, FaLinkedin, FaTwitter, FaBehance } from 'react-icons/fa'
    
    export default function Footer() {
      return (
      <footer className='relative footer-border pt-2 md:justify-between px-4 flex md:flex-row flex-col-reverse sm:justify-center'>
          <p className='text-white text-sm sm:justify-center flex font-footer items-center md:mb-2 sm:mb-4'>
            &copy; {new Date().getFullYear()} TIFFANYCFY. All rights reserved.
          </p>
          <div className='flex gap-x-8 flex-row sm:justify-center sm:pr-8 sm:mt-1 md:mt-0 md:pr-0 sm:mb-4'>
            <div className='vertical-line'></div>
            <a href='https://www.linkedIn.com/in/tiffanycfy' target='_blank'>
              <Icon
                as={FaLinkedin}
                color={'secondary'}
                h={['1em','1em','2em','2em']}
                w={['1em','1em','2em','2em']}
                aria-label="LinkedIn"
                />
            </a>
            <a href='https://www.instagram.com/tiffanycfy' target='_blank'>
              <Icon 
                as={FaInstagram}
                color={'secondary'} 
                h={['1em','2em','2em','2em']}
                w={['1em','2em','2em','2em']}
                aria-label="GitHub" 
                />
            </a>
            <a href='https://www.twitter.com/tiffanycfy' target='_blank'>
              <Icon 
                as={FaTwitter} 
                color={'secondary'} 
                h={['1em','2em','2em','2em']}
                w={['1em','2em','2em','2em']}
                aria-label="Twitter" 
                />
            </a>
            <a href='https://www.behance.net/tiffanycfy' target='_blank'>
              <Icon 
                as={FaBehance} 
                color={'secondary'} 
                h={['1em','2em','2em','2em']}
                w={['1em','2em','2em','2em']}
                aria-label="Behance" 
                />
            </a>
          </div>
        </footer>
      )
    }