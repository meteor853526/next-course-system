'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import SessionProvider from './context/AuthProvider'
import DefaultBar from '../components/defaultbar'
import Announcement from '../components/announcement'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {

  return ( // wrap session with provider so you can get userdata in following components
    <html lang="en">
      
      <SessionProvider> 
       <body className={inter.className}>
        <DefaultBar/>
        {children}
       </body>
      </SessionProvider>  
    </html>
  )
}

