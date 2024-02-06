import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import Script from 'next/script'


const montserrat = Montserrat({ subsets: ['latin'], })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={""}>
      <head>

      </head>
      <body className={`${montserrat.variable} bg-light w-full min-h-screen dark:bg-dark `}> 
        
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
