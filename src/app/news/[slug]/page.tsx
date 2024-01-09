import Image from "next/image";

export async function getArticle(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`);
  return await res.json();
}

export default async function Page({
                                     params: { slug },
                                   }: {
  params: { slug: string }
}) {

  const article = await getArticle(slug);

  let articleContent: string = "";
  try {
    const contentArr = article.content.split("<div class=\"saswp-faq-block-section\">");
    articleContent = contentArr[0];
  } catch (e) {
    articleContent = article.content;
  }

  let articleFaqs;
  try {
    const contentArr = article.content.split("<div class=\"saswp-faq-block-section\">");
    if (contentArr[1]) {
      const faqStr = `<div class=\"saswp-faq-block-section\">${contentArr[1]}`;
      const faqMatches: any = faqStr.matchAll(/<h5 class="saswp-faq-question-title">(.*?)<\/h5><p class="saswp-faq-answer-text">(.*?)<\/p>/gm);
      const faqs = [];
      for (const faqMatch of faqMatches) {
        faqs.push({
          question: faqMatch[1].replace(/(<([^>]+)>)/gi, ""),
          answer: faqMatch[2].replace(/(<([^>]+)>)/gi, ""),
        });
      }
      articleFaqs = faqs;
    } else {
    }
  } catch (e) {
    console.error(e);
  }

  return (
    <>
      <section className="section-bg py-[100px] relative z-5">
        <div className="section-bg__item col-12">
          <Image
            width={1920}
            height={600}
            src={article.originalImageUrl}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand opacity-75 w-full h-full" />
        {/* End .section-bg__item */}

        <div className="container relative z-10">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-[30px] md:text-[40px] fw-600 text-white mt-[20px] mb-[10px]">
                  {article.title}
                </h1>
              </div>
              {/* End text-center */}
              {/*<MainFilterSearchBox />*/}
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className="container">
        <div className="blog-single prose prose-h2:font-medium prose-h3:font-medium md:prose-lg prose-slate mx-auto prose-p:text-slate-800">
          <div className="pb-8" dangerouslySetInnerHTML={{__html: articleContent}}/>
        </div>

        <div className="prose md:prose-lg md:prose-h1:text-4xl prose-slate prose-p:text-slate-800 mx-auto">
          {articleFaqs && articleFaqs.length > 0 ? (
            <div className="pb-6">
              <h3>常見問題</h3>
              <ol className="pl-0">
                {articleFaqs.map((articleFaq, index) => (
                  <li key={`faq-${index}`} className="ml-0 pl-0">
                    <p><strong>{articleFaq.question}</strong></p>
                    <p>{articleFaq.answer}</p>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>
      </section>

    </>
  )
}