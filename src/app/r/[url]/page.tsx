"use client";

import {useEffect, useMemo} from "react";
import {useParams} from "next/navigation";
import Image from "next/image";
import Gtm from "@/components/Gtm";

const Redirect = () => {

  const params = useParams<{url: string}>();

  const redirectUrl = useMemo(() => {
    if (params) {
      return decodeURIComponent(params.url);
    }
    return null;
  }, [params]);


  const redirectProviderMeta = useMemo(() => {
    if (!redirectUrl) {
      return { name: null, logo: null };
    }
    const url = new URL(redirectUrl);
    const redirectDomain = url.host.replace("www.", "");

    switch (redirectDomain) {
      case "hk.trip.com":
        return { name: 'Trip.com', logo: `trip.webp` };
      default:
        if (redirectUrl.includes("agoda")) {
          return { name: 'Agoda', logo: `agoda.webp` };
        }
        return { name: null, logo: null };
    }
  }, [redirectUrl]);

  useEffect(() => {
    if (redirectUrl) {
      window.setTimeout(() => {
        //window.location.href = redirectUrl;
      }, 2000);
      (async () => {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hotel/l`, {
          method: 'POST',
          body: JSON.stringify({
            name: 'redirect',
            payload: {
              url: redirectUrl
            }
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
      })();
    }
  }, [redirectUrl]);

  return (
    <div className="bg-[#f7f7f7] min-h-full w-full md:absolute flex justify-center items-center">
      <div className="md:max-w-[560px] bg-white md:rounded-md overflow-hidden w-full text-center">
        <header className="bg-primary text-center flex justify-center py-3">
          <Image
            className="h-8 w-auto"
            src="/logo-white.svg"
            alt="TripTripGo Logo"
            width={298*0.6}
            height={52*0.6}
          />
        </header>
        <div>

          {redirectProviderMeta ? (
            <div className="pt-[100px] flex items-center justify-center">
              <Image
                className="h-6 w-auto"
                src="/logo.svg"
                alt="TripTripGo Logo"
                width={298*0.5}
                height={52*0.5}
                objectFit={'contain'}
              />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-grey w-4 mx-10 animate-bounce">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
              </svg>
              <Image
                className="h-6 w-auto"
                src={`/images/redirect/${redirectProviderMeta.logo}`}
                width={298*0.5}
                height={52*0.5}
                objectFit={'contain'}
                alt={"Logo"}
              />
            </div>
          ) : null}

          <h1 className="font-medium text-2xl py-[40px]">正將你重新導向到 {redirectProviderMeta.name}</h1>
          <div className="w-[90%] mx-auto my-14" />
          {/*<div className="w-[90%] mx-auto my-14">*/}
          {/*  <hr />*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <section className="">*/}
          {/*    <div className="container">*/}
          {/*      <div className="row y-gap-40 sm:y-gap-10 justify-between">*/}
          {/*        <BlockGuide />*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </section>*/}
          {/*</div>*/}
          {redirectUrl ? (
            <p className="text-xs text-gray-500 mb-[20px]">如瀏覽器未能重新導向，請點擊此<a href={redirectUrl}><u>連結</u></a></p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Redirect;
