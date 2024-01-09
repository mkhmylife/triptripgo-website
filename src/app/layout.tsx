import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss';
import './sass/main.scss';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Gtm from "@/components/Gtm";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | TripTripGo 精選推介北上深圳酒店住宿',
    default: 'TripTripGo 精選推介北上深圳酒店住宿',
  },
  description: '精選深圳南山區、福田區、羅湖區十大酒店推介。幫你搜羅至 hit 心水酒店，幫你比較多間酒店價錢，幫你蒐集多間酒店真實住後評價！',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-HK">
    <meta name="agd-partner-manual-verification" />
    <body className={inter.className}>
    <Gtm />
    <Header />
    {children}
    <Footer />
    </body>
    </html>
  )
}
