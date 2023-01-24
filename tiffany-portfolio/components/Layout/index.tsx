import React, { ReactNode } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

export interface LayoutProps {
    children?: ReactNode
}

export default function Layout({children, ...props}:LayoutProps) {
  return (
    <><Navbar /><main {...props}>{children}</main><Footer /></>
  )
}
