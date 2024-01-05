'use client';

import Link from "next/link";
import {getChainColor, getRatingText, Hotel} from "@/types/Hotel";
import Image from "next/image";
import useSWR from "swr";
import {fetcher} from "@/lib/fetcher";

interface IProps {
  limit?: number;
  chainName?: string | null;
  area?: string | null;
}

const HotelFilters = (props: IProps) => {

  const params = new URLSearchParams({
    limit: props.limit?.toString() || '100',
  });
  if (props.area) {
    params.append('area', props.area);
  }
  if (props.chainName) {
    params.append('chainName', props.chainName);
  }
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
                  {hotel.featuredImageUrl && hotel.featuredImageUrl !== '' && hotel.featuredImageUrl !== 'undefined' ? (
                    <Image
                      className="aspect-[14/10] object-cover"
                      src={hotel.featuredImageUrl}
                      alt={hotel.name}
                      width={600}
                      height={600*14/10}
                    />
                  ) : null}
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
              <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500 line-clamp-1">
                <span>{hotel.name}</span>
              </h4>
              <h4 className="hotelsCard__title text-dark-1 text-14 lh-16 fw-500 line-clamp-1 mb-[5px]">
                <span>{hotel.nameEn}</span>
              </h4>
              <div className="text-yellow-500 flex mb-[5px]">
                {new Array(hotel.starRating).fill(0).map((_, index) => (
                  <svg key={`star-${index}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-light-1 lh-14 text-14 mt-5">
                {hotel.city}
                {hotel.area ? (
                  <>
                    {hotel.area}
                  </>
                ) : null}
              </p>

              <div className="d-flex items-center mt-[10px]">
                <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                  {hotel.ratingAverage?.toFixed(1)}
                </div>
                <div className="text-14 text-dark-1 fw-500 ml-10">
                  {getRatingText(hotel.ratingAverage)}
                </div>
                <div className="text-14 text-light-1 ml-10">
                  {hotel.numberOfReviews} 評價
                </div>
              </div>

              {hotel.description ? (
                <div className="text-sm line-clamp-3 mt-[10px] mb-[20px] text-gray-600">
                  {hotel.description}
                </div>
              ) : null}

              <div className={`mt-10 grid gap-2 ${hotel.agodaUrl && hotel.tripUrl ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {hotel.tripUrl ? (
                  <Link href={`/r/${encodeURIComponent(hotel.tripUrl)}`} target="_blank" className="fw-500 bg-gray-100 flex justify-between items-center rounded p-[8px]">
                    <div>
                      <div className="font-semibold text-xs mb-[1px]">Trip.com</div>
                      <div className="text-blue-1 text-sm">
                        {hotel.priceTrip ? (
                          <>HK${Math.round(hotel.priceTrip).toLocaleString()}起</>
                        ) : (
                          <>查看至抵價格</>
                        )}
                      </div>
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
                      <div className="text-blue-1 text-sm">
                        {hotel.priceAgoda ? (
                          <>HK${Math.round(hotel.priceAgoda).toLocaleString()}起</>
                        ) : (
                          <>查看至抵價格</>
                        )}
                      </div>
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
