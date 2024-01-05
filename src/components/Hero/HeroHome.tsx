import Image from "next/image";

export default function HeroHome() {
  return (
    <section className="masthead -type-2 z-2">
      <div className="masthead__bg bg-dark-3">
        <img alt="image" src="/img/masthead/2/bg.png" className="js-lazy" />
      </div>
      {/* End bg image */}

      <div className="container">
        <div className="masthead__tabs">
          <div className="tabs -bookmark-2 js-tabs">
            <div className="tabs__controls d-flex items-center js-tabs-controls">
              {/*{tabs?.map((tab) => (*/}
              {/*  <button*/}
              {/*    key={tab?.id}*/}
              {/*    className={`tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-white js-tabs-button ${*/}
              {/*      tab?.name === currentTab ? "is-tab-el-active" : ""*/}
              {/*    }`}*/}
              {/*    onClick={() => dispatch(addCurrentTab(tab?.name))}*/}
              {/*  >*/}
              {/*    <i className={`${tab.icon} text-20 mr-10 sm:mr-5`}></i>*/}
              {/*    {tab?.name}*/}
              {/*  </button>*/}
              {/*))}*/}
            </div>
          </div>
          {/* End tabs */}
        </div>
        {/* End .masthead__tabs */}

        <div className="masthead__content">
          <div className="row y-gap-40">
            <div className="col-xl-6" data-aos="fade-up" data-aos-offset="0">
              <h1 className="z-2 text-60 lg:text-40 md:text-30 text-white pt-80 xl:pt-0">
                精選推介
                <br />
                <span className="text-yellow-1">北上深圳酒店住宿</span>
              </h1>
              <p className="z-2 text-white mt-20">
                精選深圳南山區、福田區、羅湖區十大酒店推介
              </p>

              {/*<MainFilterSearchBox />*/}

              {/* End filter content */}
            </div>
            {/* End .col */}

            <div className="col-xl-6">
              <div className="masthead__images relative-1">
                <div data-aos="fade" data-aos-delay="400">
                  <Image
                    width={720}
                    height={1080}
                    src="/images/home1.jpeg"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
                {/* End left image */}

                <div data-aos="fade" data-aos-delay="600">
                  <Image
                    width={1080}
                    height={720}
                    src="/images/home2.jpeg"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
                {/* End right top image */}

                <div data-aos="fade" data-aos-delay="800">
                  <Image
                    width={1080}
                    height={720}
                    src="/images/home3.jpeg"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
                {/* End right bottom image */}
              </div>

              {/* End .masthead__images */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .masthead__content */}
      </div>
      {/* End .container */}
    </section>
  );
}