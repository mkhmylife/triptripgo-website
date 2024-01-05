import Image from 'next/image'
import HeroHome from "@/components/Hero/HeroHome";
import BlockGuide from "@/components/BlockGuide/BlockGuide";
import HotelFilters from "@/components/HotelsFilter/HotelFilters";
import Testimonial from "@/components/Testimonial/Testimonial";
import CallToActionsHome from "@/components/CallToActions/Home";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroHome />

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 sm:y-gap-10 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">深圳精選酒店</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  精選深圳南山區、福田區、羅湖區十大奢華親子打卡酒店推介
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden pt-40 sm:pt-20">
            <div className="row y-gap-30">
              <HotelFilters limit={8} />
            </div>
            <div className="mt-[50px]">
              <div className="flex justify-center items-center">
                <Link href="/shenzhen/hotels" className="rounded-100 bg-brand text-white px-[30px] py-[6px]">
                  {/*<i className="icon-up-down text-14 mr-10"></i>*/}
                  查看更多深圳酒店
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-lg layout-pb-lg bg-dark-3">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <h2 className="text-30 text-white">
                關於我們
              </h2>
              <p className="text-white mt-20 mb-10">
                Trip Trip Go 專注為港人提供優質北上住宿資訊整合及推介，務求提高北上體驗質素嘅平台。美好的旅程，享受最相宜價格，實踐美好生活。
              </p>

              <div className="row y-gap-30 text-white pt-60 lg:pt-40">
                <div className="col-sm-5 col-6">
                  <div className="text-30 lh-15 fw-600">30,000+</div>
                  <div className="lh-15">精選酒店</div>
                </div>
                {/* End .col */}

                <div className="col-sm-5 col-6">
                  <div className="text-30 lh-15 fw-600">9.18</div>
                  <div className="lh-15">平均酒店評分</div>
                  <div className="d-flex x-gap-5 items-center pt-10">
                    <div className="icon-star text-white text-10" />
                    <div className="icon-star text-white text-10" />
                    <div className="icon-star text-white text-10" />
                    <div className="icon-star text-white text-10" />
                    <div className="icon-star text-white text-10" />
                  </div>
                </div>
                {/* End .col */}
              </div>
            </div>
            {/* End .col */}

            {/*<div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">*/}
            {/*  <Testimonial />*/}
            {/*</div>*/}
            {/* End .col */}
          </div>
          {/* End .row */}

          {/*<div className="row justify-center text-center pt-60">*/}
          {/*  <div className="col-auto">*/}
          {/*    <div className="text-15 lh-1 text-white">*/}
          {/*      合作夥伴*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*/!* End .row *!/*/}

          {/*<div className="px-40 md:px-0">*/}
          {/*  <div className="row y-gap-30 justify-between items-center pt-60 lg:pt-40">*/}
          {/*    {["1", "2", "3", "4", "5", "6"].map((item, i) => (*/}
          {/*      <div className="col-md-auto col-sm-6" key={i}>*/}
          {/*        <div className="d-flex justify-center">*/}
          {/*          <img src={`/img/clients/${item}.svg`} alt="image" />*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </section>

      {/*<CallToActionsHome />*/}
    </>
  )
}
