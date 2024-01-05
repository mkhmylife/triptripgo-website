import { Inter } from 'next/font/google'
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
import Gtm from "@/components/Gtm";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-HK">
    <body className={inter.className}>
    <Gtm />
    {children}
    <Footer />
    </body>
    </html>
  )
}
