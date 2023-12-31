'use client';

import Link from "next/link";
import {Hotel} from "@/types/Hotel";
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
          <Link
            href={`${hotel.tripUrl || hotel.agodaUrl}`}
            target="_blank"
            className="hotelsCard -type-1 hover-inside-slider"
          >
            <div className="hotelsCard__image">
              <div className="cardImage">
                <div className="">
                  <Image
                    className=" aspect-[12/10] object-cover"
                    src={hotel.featuredImageUrl}
                    alt={hotel.name}
                    width={600}
                    height={600*12/10}
                  />
                </div>
                {/*<div className="cardImage__leftBadge">*/}
                {/*  <div*/}
                {/*    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-blue-500 text-white`}*/}
                {/*  >*/}
                {/*    {hotel.tags[0]}*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
            <div className="hotelsCard__content mt-10">
              <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                <span>{hotel.name}</span>
              </h4>
              <p className="text-light-1 lh-14 text-14 mt-5">
                {hotel.city}
              </p>
              <div className="d-flex items-center mt-20">
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
              <div className="mt-5">
                <div className="fw-500">
                  <span className="text-blue-1">HK${hotel.price}起</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default HotelFilters;
