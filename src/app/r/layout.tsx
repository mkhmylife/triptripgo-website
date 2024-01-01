import { Inter } from 'next/font/google'
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-HK">
    <body className={inter.className}>
    {children}
    <Footer />
    </body>
    </html>
  )
}
