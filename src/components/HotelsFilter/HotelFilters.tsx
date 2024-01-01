'use client';

import Link from "next/link";
import {getChainColor, Hotel} from "@/types/Hotel";
import Image from "next/image";
import useSWR from "swr";
import {fetcher} from "@/lib/fetcher";

interface IProps {
  limit?: number;
}

const HotelFilters = (props: IProps) => {

  const params = new URLSearchParams({
    limit: props.limit?.toString() || '100',
  });
  const { data: hotels } = useSWR<Hotel[]>(`${process.env.NEXT_PUBLIC_API_URL}/hotel?${params.toString()}`, fetcher);

  return (
    <>
      {hotels?.map((hotel) => (
        <div
          className="col-xl-3 col-lg-3 col-sm-6"
          key={hotel.id}
        >
          <div className="hotelsCard -type-1 hover-inside-slider border block rounded">
            <div className="hotelsCard__image rounded-bottom-0">
              <div className="cardImage">
                <div className="">
                  <Image
                    className=" aspect-[14/10] object-cover"
                    src={hotel.featuredImageUrl}
                    alt={hotel.name}
                    width={600}
                    height={600*14/10}
                  />
                </div>
                {hotel.chainName ? (
                  <div className="cardImage__leftBadge">
                    <div className="bg-yellow-600 bg-red-500 bg-blue-600"/>
                    <div
                      className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 text-bold text-white ${getChainColor(hotel.chainName)}`}
                    >
                      {hotel.chainName}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="hotelsCard__content p-[14px]">
              <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                <span>{hotel.name}</span>
              </h4>
              <p className="text-light-1 lh-14 text-14 mt-5">
                {hotel.city}
                {hotel.area ? (
                  <>
                    ，{hotel.area}
                  </>
                ) : null}
              </p>
              <div className="d-flex items-center mt-[10px]">
                <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                  {hotel.ratingAverage?.toFixed(1)}
                </div>
                <div className="text-14 text-dark-1 fw-500 ml-10">
                  超激讚
                </div>
                <div className="text-14 text-light-1 ml-10">
                  {hotel.numberOfReviews} 評價
                </div>
              </div>
              <div className={`mt-10 grid gap-2 ${hotel.agodaUrl && hotel.tripUrl ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {hotel.tripUrl ? (
                  <Link href={`/r/${encodeURIComponent(hotel.tripUrl)}`} target="_blank" className="fw-500 bg-gray-100 flex justify-between items-center rounded p-[8px]">
                    <div>
                      <div className="font-semibold text-xs mb-[1px]">Trip.com</div>
                      <div className="text-blue-1 text-sm">HK${hotel.price}起</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                ) : null}
                {hotel.agodaUrl ? (
                  <Link href={`/r/${encodeURIComponent(hotel.agodaUrl)}`} target="_blank" className="fw-500 bg-gray-100 flex justify-between items-center rounded p-[8px]">
                    <div>
                      <div className="font-semibold text-xs mb-[1px]">Agoda</div>
                      <div className="text-blue-1 text-sm">HK${hotel.price}起</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HotelFilters;
