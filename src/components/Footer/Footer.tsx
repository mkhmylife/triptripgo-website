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

        <p className="py-20 border-top-white-15 text-center w-full text-[12px]">
          © 2024 TripTripGo All rights reserved.
        </p>
      </div>
      {/* End container */}
    </footer>
  );
};

export default Footer;
