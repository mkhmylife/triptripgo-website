import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import './sass/main.scss';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GoNorth 精選北上酒店住宿',
  description: '精選深圳南山區、福田區、羅湖區十大酒店推介',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
