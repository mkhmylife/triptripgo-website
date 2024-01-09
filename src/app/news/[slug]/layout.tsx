import {Metadata} from "next";

export const metadata: Metadata = {
  title: '深圳精選酒店',
  description: '精選深圳南山區、福田區、羅湖區十大酒店推介。幫你搜羅至 hit 心水酒店，幫你比較多間酒店價錢，幫你蒐集多間酒店真實住後評價！',
}

export default function NewsLayout({
                                       children,
                                     }: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}