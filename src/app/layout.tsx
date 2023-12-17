import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import './globals.css'
import Notification from '@/components/Notification'
import Navber from '@/components/Navber'
import Footer from '@/components/Footer'
import Wishlist from '@/components/Wishlist'

const inter = Noto_Serif({ subsets: ['latin'], weight: ["200","300","400","500","700","900"] })

export const metadata: Metadata = {
  title: 'Foodies App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification />
        <Navber />
        <Wishlist />
        {children}
        <Footer />
      </body>
    </html>
  )
}