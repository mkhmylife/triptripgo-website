import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer -type-1 text-dark">
      <div className="container">
        {/*<div className="pt-60 pb-60">*/}
        {/*  <div className="row y-gap-40 justify-between xl:justify-start">*/}
        {/*    <div className="col-xl-2 col-lg-4 col-sm-6">*/}
        {/*      <h5 className="text-16 fw-500 mb-30">Contact Us</h5>*/}
        {/*      <div className="mt-30">*/}
        {/*        <div className={"text-14 mt-30"}>123</div>*/}
        {/*        <a className="text-18 fw-500 text-white mt-5">*/}
        {/*          456*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    /!* End col *!/*/}

        {/*    <div className="col-xl-2 col-lg-4 col-sm-6">*/}
        {/*      <h5 className="text-16 fw-500 mb-30">123</h5>*/}
        {/*      <div className="d-flex y-gap-10 flex-column">*/}
        {/*        <Link href={''}>*/}
        {/*          456*/}
        {/*        </Link>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    /!* End footer menu content *!/*/}

        {/*    /!*<div className="col-xl-2 col-lg-4 col-sm-6">*!/*/}
        {/*    /!*  <h5 className="text-16 fw-500 mb-30">Mobile</h5>*!/*/}
        {/*    /!*  <AppButton />*!/*/}
        {/*    /!*</div>*!/*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/* End footer top */}

        <div className="py-20  border-top-white-15 text-sm">
          <div className="row justify-between items-center y-gap-10">
            <div className="col-auto">
              <div className="row x-gap-30 y-gap-10">
                <div className="col-auto">
                  <div className="d-flex items-center">
                    © 2024 TripTripGo All rights reserved.
                  </div>
                </div>
                {/* End .col */}

                <div className="col-auto">
                  <div className="d-flex x-gap-15">
                    <a href="#">私隱政策</a>
                    <a href="#">使用條款</a>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-auto">
                  <div>所有資訊僅供參考，TripTripGo 概不承擔任何法律義務或責任</div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="row y-gap-10 items-center">
                {/*<div className="col-auto">*/}
                {/*  <div className="d-flex items-center">*/}
                {/*    <button className="d-flex items-center text-14 fw-500 text-white mr-10">*/}
                {/*      <i className="icon-globe text-16 mr-10" />*/}
                {/*      <span className="underline">English (US)</span>*/}
                {/*    </button>*/}
                {/*    <button className="d-flex items-center text-14 fw-500 text-white">*/}
                {/*      <i className="icon-usd text-16 mr-10" />*/}
                {/*      <span className="underline">USD</span>*/}
                {/*    </button>*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/* End .col */}

                {/*<div className="col-auto">*/}
                {/*  <div className="d-flex x-gap-20 items-center">*/}
                {/*    <Social />*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/* End .col */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default Footer;
