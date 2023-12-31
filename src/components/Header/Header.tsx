'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import MainMenu from "@/components/Header/MainMenu";
import {usePathname} from "next/navigation";

const Header1 = () => {

  const pathname = usePathname();

  // const [navbar, setNavbar] = useState(false);

  // const changeBackground = () => {
  //   if (window.scrollY >= 10) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };
  //
  // useEffect(() => {
  //   window.addEventListener("scroll", changeBackground);
  //   return () => {
  //     window.removeEventListener("scroll", changeBackground);
  //   };
  // }, []);

  if (pathname.includes('/r/')) {
    return null;
  }

  return (
    <>
      <header className={`header bg-dark-1`}>
        <div className="header__container container">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-20">
                  <img src="/logo-white.svg" alt="TripTripGo Logo" />
                  <img src="/logo.svg" alt="TripTripGo Logo" />
                </Link>
                {/* End logo */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-white" />
                  </div>
                </div>
                {/* End header-menu */}

                {/*/!* Start btn-group *!/*/}
                {/*<div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">*/}
                {/*  <Link*/}
                {/*    to="/login"*/}
                {/*    className="button px-30 fw-400 text-14 -blue-1 bg-white h-50 text-dark-1"*/}
                {/*  >*/}
                {/*    Become An Expert*/}
                {/*  </Link>*/}
                {/*  <Link*/}
                {/*    to="/signup"*/}
                {/*    className="button px-30 fw-400 text-14 border-white -blue-1 h-50 text-white ml-20"*/}
                {/*  >*/}
                {/*    Sign In / Register*/}
                {/*  </Link>*/}
                {/*</div>*/}
                {/*/!* End btn-group *!/*/}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-white">
                  {/*<div>*/}
                  {/*  <li className={pathname === "/" ? "current" : ""}>*/}
                  {/*    <Link href="/">主頁</Link>*/}
                  {/*  </li>*/}
                  {/*</div>*/}
                  <div className="flex gap-4">
                    <li>
                      <Link href="/shenzhen/hotels">深圳酒店</Link>
                    </li>
                    <li>
                      <Link href="/news/7-%e3%80%90%e6%b7%b1%e5%9c%b3%e5%a5%bd%e5%8e%bb%e8%99%952024%e3%80%91%e6%b7%b1%e5%9c%b3%e4%b8%80%e6%97%a5%e9%81%8a5%e5%a4%a7%e6%99%af%e9%bb%9e%e6%8e%a8%e4%bb%8b">深圳好去處</Link>
                    </li>
                  </div>
                  {/*<div>*/}
                  {/*  <button*/}
                  {/*    className="d-flex items-center icon-menu text-inherit text-20"*/}
                  {/*    data-bs-toggle="offcanvas"*/}
                  {/*    aria-controls="mobile-sidebar_menu"*/}
                  {/*    data-bs-target="#mobile-sidebar_menu"*/}
                  {/*  />*/}

                  {/*  <div*/}
                  {/*    className="offcanvas offcanvas-start  mobile_menu-contnet"*/}
                  {/*    tabIndex={-1}*/}
                  {/*    id="mobile-sidebar_menu"*/}
                  {/*    aria-labelledby="offcanvasMenuLabel"*/}
                  {/*    data-bs-scroll="true"*/}
                  {/*  >*/}
                  {/*    /!*<MobileMenu />*!/*/}
                  {/*    /!* End MobileMenu *!/*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header1;
