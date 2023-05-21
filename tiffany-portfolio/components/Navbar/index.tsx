import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../Logo'
import { useState } from 'react';
import { TypeFont } from '../../interfaces/contentful';
import { Entry } from 'contentful';

interface NavItemsProps {
  isOpen: boolean
  className: string
}

const NavItems = ({isOpen, className}:NavItemsProps) => {
  const smallDisplay = isOpen ? 'sm:flex sm:flex-col w-full' : 'sm:hidden';
  return (
    <div
      className={`md:h-8 block md:flex md:flex-row items-center ${smallDisplay} md:w-fit md:gap-x-5`}
    >
      <div className='vertical-line'></div>
      <a href='/about' className={className}>About</a>
      <a href='/work' className={className}>Work</a>
      <a href='/services' className={className}>Services</a>
    </div>
  )
}

type NavbarProps = {
  fontAPIData: Entry<TypeFont>
}

export default function Navbar() {
  // const {isOpen, onOpen, onClose} = useDisclosure();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  return (
    <nav className='navbar-border w-full sticky z-20 top-0 flex flex-wrap bg-black justify-between px-4 py-2 items-center revealed unrevealed'>
      <div className='md:w-[60px] sm:w-[50px]'>
          <a href='/' className='w-fit'>
            <Logo/>
          </a>
      </div>
      <button className='md:hidden' onClick={() => {isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true)}}> 
          {isNavOpen ? <CloseIcon boxSize={18}/> : <HamburgerIcon boxSize={20}/>}
      </button>
      <NavItems isOpen={isNavOpen} className='font-navbar' />
    </nav>
  )
}


