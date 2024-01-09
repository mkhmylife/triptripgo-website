import {getArticle} from "@/lib/article";

export async function generateMetadata({
                                         params: { slug },
                                       }: {
  params: { slug: string }
}) {
  const article = await getArticle(slug);
  return {
    title: article.title,
    description: article.excerpt,
  }
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