import { useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../Logo'
import Link from 'next/link';
import { useState } from 'react';

interface NavItemsProps {
  isOpen: boolean
}

const NavItems = ({isOpen}:NavItemsProps) => {
  const smallDisplay = isOpen ? 'sm:flex sm:flex-col w-full' : 'sm:hidden';
  return (
    <div
      className={`md:h-8 block md:flex md:flex-row items-center ${smallDisplay} md:w-fit md:gap-x-5`}
    >
      <div className='vertical-line'></div>
      <Link href='/about'>About</Link>
      <Link href='/work'>Work</Link>
      <Link href='/services'>Services</Link>
    </div>
  )
}

export default function Navbar() {
  // const {isOpen, onOpen, onClose} = useDisclosure();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  return (
    <nav className='navbar-border w-full sticky z-20 top-0 flex flex-wrap bg-black justify-between px-4 py-2 items-center'>
      <div className='w-[400px]'>
          <Link href='/' className='w-fit'>
            <Logo/>
          </Link>
      </div>
      <button className='sm:block md:hidden' onClick={() => {isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true)}}> 
          {isNavOpen ? <CloseIcon/> : <HamburgerIcon/>}
      </button>
      <NavItems isOpen={isNavOpen}/>
    </nav>
  )
}
