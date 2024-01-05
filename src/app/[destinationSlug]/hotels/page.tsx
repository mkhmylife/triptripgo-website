'use client';

import HotelFilters from "@/components/HotelsFilter/HotelFilters";
import Link from "next/link";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";

export default function Hotels() {

  const param = useParams<{destinationSlug: string}>();
  const query = useSearchParams();

  const activeArea = query.get('area');
  const activeChainName = query.get('chainName');

  return (
    <>
      <section className="section-bg py-[100px] relative z-5">
        <div className="section-bg__item col-12">
          <Image
            width={1920}
            height={600}
            src="/images/destinations/shenzhen.jpg"
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
                <h1 className="text-[40px] fw-600 text-white mb-[10px]">
                  深圳精選酒店
                </h1>
                <h2 className="text-[16px] text-white">深圳南山區、福田區、羅湖區百大奢華親子打卡酒店推介</h2>
              </div>
              {/* End text-center */}
              {/*<MainFilterSearchBox />*/}
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="row x-gap-20 y-gap-10 items-center">
                <div className="col-auto">
                  <div className="text-18 fw-500">精選分類</div>
                </div>
                {/* End .col-auto */}

                <div className="flex flex-wrap gap-[10px]">
                  <Link
                    href={`/${param.destinationSlug}/hotels`}
                    className={`d-flex items-center text-14 rounded-100 border-light px-15 h-34 hover:bg-blue-500 hover:text-white hover:bg-blue-500 hover:text-white ${!activeArea && !activeChainName ? 'bg-blue-500 text-white border-blue-500' : null}`}
                  >
                    <span className="js-dropdown-title">所有</span>
                  </Link>
                  {['南山區', '福田區'].map((area) => (
                    <Link
                      href={`?area=${area}`}
                      key={`area-${area}`}
                      className={`d-flex items-center text-14 rounded-100 border-light px-15 h-34 hover:bg-blue-500 hover:text-white hover:bg-blue-500 hover:text-white ${activeArea === area ? 'bg-blue-500 text-white border-blue-500' : null}`}
                    >
                      <span className="js-dropdown-title">{area}</span>
                    </Link>
                  ))}
                  {['萬豪', '凱悅', '亞朵'].map((chainName) => (
                    <Link
                      href={`?chainName=${chainName}`}
                      key={`chainName-${chainName}`}
                      className={`d-flex items-center text-14 rounded-100 border-light px-15 h-34 hover:bg-blue-500 hover:text-white hover:bg-blue-500 hover:text-white ${activeChainName === chainName ? 'bg-blue-500 text-white border-blue-500' : null}`}
                    >
                      <span className="js-dropdown-title">{chainName}</span>
                    </Link>
                  ))}
                </div>
                {/* End .col-auto */}
              </div>
              {/* End .row */}
            </div>
            {/* End col-auto */}

            {/*<div className="col-auto">*/}
            {/*  <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">*/}
            {/*    <i className="icon-up-down text-14 mr-10"></i>*/}
            {/*    精選排序*/}
            {/*  </button>*/}
            {/*</div>*/}
            {/* End col-auto */}

            <div className="border-top-light mt-30 mb-30"></div>
            {/* End border-top */}

            <div className="row y-gap-30">
              <HotelFilters
                chainName={activeChainName}
                area={activeArea}
              />
            </div>
            {/* End .row */}
            {/*<Pagination />*/}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}
    </>
  )
}