import {
    Icon    } from '@chakra-ui/react'
    import { FaInstagram, FaLinkedin, FaTwitter, FaBehance } from 'react-icons/fa'
    
    export default function Footer() {
      return (
      <div className='footer-border pt-2 justify-between px-4 flex flex-row px-2'>
          <p className='text-white text-sm'>
            &copy; {new Date().getFullYear()} TIFFANYCFY. All rights reserved.
          </p>
          <div className='flex gap-x-8 flex-row'>
            <div className='vertical-line'></div>
            <a href='https://www.linkedIn.com/in/tiffanycfy'>
              <Icon
                as={FaLinkedin}
                color={'secondary'}
                h={['1em','2em','2em','2em']}
                w={['1em','2em','2em','2em']}
                aria-label="LinkedIn"
                />
            </a>
            <a href='https://www.instagram.com/tiffanycfy'>
              <Icon 
                as={FaInstagram}
                color={'secondary'} 
                h={['1em','2em','2em','2em']}
                w={['1em','2em','2em','2em']}
                aria-label="GitHub" 
                />
            </a>
            <a href='https://www.twitter.com/tiffanycfy'>
              <Icon 
                as={FaTwitter} 
                color={'secondary'} 
                h={['1em','2em','2em','2em']}
                w={['1em','2em','2em','2em']}
                aria-label="Twitter" 
                />
            </a>
            <a href='https://www.behance.net/tiffanycfy'>
              <Icon 
                as={FaBehance} 
                color={'secondary'} 
                h={['1em','2em','2em','2em']}
                w={['1em','2em','2em','2em']}
                aria-label="Behance" 
                />
            </a>
          </div>
        </div>
      )
    }