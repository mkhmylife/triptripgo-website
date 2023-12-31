import HotelFilters from "@/components/HotelsFilter/HotelFilters";

export default function Hotels() {
  return (
    <>
      <section className="section-bg pt-80 pb-60 relative z-5">
        <div className="section-bg__item col-12">
          <img
            src="/img/misc/bg-1.png"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* End .section-bg__item */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-30 fw-600 text-white">
                  深圳精選酒店
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

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="row x-gap-20 y-gap-10 items-center">
                <div className="col-auto">
                  <div className="text-18 fw-500">精選分類</div>
                </div>
                {/* End .col-auto */}

                <div className="col-auto flex gap-[10px]">
                  {/*<DropdownSelelctBar />*/}
                  <div className="d-flex items-center text-14 rounded-100 border-light px-15 h-34">
                    <span className="js-dropdown-title">南山區</span>
                  </div>
                  <div className="d-flex items-center text-14 rounded-100 border-light px-15 h-34">
                    <span className="js-dropdown-title">福田區</span>
                  </div>
                  <div className="d-flex items-center text-14 rounded-100 border-light px-15 h-34">
                    <span className="js-dropdown-title">羅湖區</span>
                  </div>
                </div>
                {/* End .col-auto */}
              </div>
              {/* End .row */}
            </div>
            {/* End col-auto */}

            <div className="col-auto">
              <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                <i className="icon-up-down text-14 mr-10"></i>
                精選排序
              </button>
            </div>
            {/* End col-auto */}

            <div className="border-top-light mt-30 mb-30"></div>
            {/* End border-top */}

            <div className="row y-gap-30">
              <HotelFilters />
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