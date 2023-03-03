import { useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../Logo'
import Link from 'next/link';
import { useState } from 'react';

interface NavItemsProps {
  isOpen: boolean
}

const NavItems = ({isOpen}:NavItemsProps) => {
  const smallDisplay = isOpen ? 'sm:flex sm:flex-col' : 'sm:hidden';
  return (
    <div
      className={`md:h-8 md:flex md:flex-row items-center ${smallDisplay} w-fit md:gap-x-5`}
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
    <div className='flex flex-col justify-center navbar-border'>
    <header className='sticky z-20 top-0 flex bg-black flex-row justify-between px-4 py-2 items-center'>
      <div>
          <Link href='/'>
          <Logo/>
          </Link>
      </div>
      <button className='sm:block md:hidden' onClick={() => {isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true)}}> 
          {isNavOpen ? <CloseIcon/> : <HamburgerIcon/>}
      </button>
      <NavItems isOpen={isNavOpen}/>
    </header>
    </div>
  )
}
