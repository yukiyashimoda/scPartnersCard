import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Special club Partners',
  description: 'SPECIAL CLUB入会企業様、提携企業様をご紹介。会員様がご利用いただける豊富な特典をご用意しております。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <NavBar />
        {children}
      
      
      </body>
    </html>
  )
}
