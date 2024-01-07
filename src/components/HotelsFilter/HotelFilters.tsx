'use client';

import Link from "next/link";
import {getChainColor, getRatingText, Hotel, HotelPlaceDistance} from "@/types/Hotel";
import Image from "next/image";
import useSWR from "swr";
import {fetcher} from "@/lib/fetcher";
import {useCallback, useMemo} from "react";
import Slider from "react-slick";

interface IProps {
  limit?: number;
  chainName?: string | null;
  area?: string | null;
  nearby?: string | null;
}

const itemSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

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
  if (props.nearby) {
    params.append('nearby', props.nearby);
  }
  const { data: hotels } = useSWR<Hotel[]>(`${process.env.NEXT_PUBLIC_API_URL}/hotel?${params.toString()}`, fetcher);

  const getHotelUrl = useCallback((hotel: Hotel) => {
    if (hotel.agodaUrl) {
      return `/r/${encodeURIComponent(hotel.agodaUrl)}`
    }
    if (hotel.tripUrl) {
      return `/r/${encodeURIComponent(hotel.tripUrl)}`
    }
    return '';
  }, []);

  const hotelSorted = useMemo(() => {
    if (!hotels) {
      return [];
    }
    if (props.nearby) {
      return hotels.sort((a, b) => {
        const aPlace = a.places.find(place => place.group === props.nearby);
        const bPlace = b.places.find(place => place.group === props.nearby);
        return (aPlace?.distance || 9999) - (bPlace?.distance || 9999);
      });
    }
    return hotels;
  }, [hotels, props]);

  const renderIcon = useCallback((place: HotelPlaceDistance) => {
    switch (place.group) {
      case "盒馬鮮生":
        return (
          <Image width={10} height={10} src="/images/icon/reshippo.png" alt="盒馬鮮生" className="w-4 h-4" />
        );
      case "山姆":
        return (
          <Image width={10} height={10} src="/images/icon/samsclub.png" alt="山姆" className="w-4 h-4" />
        )
      case "商場":
        return (
          <div className="text-brand">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
            </svg>
          </div>
        )
      case "景點":
      default:
        return (
          <div className="text-brand">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
            </svg>
          </div>
        )
    }
  }, []);

  return (
    <>
      {hotelSorted.map((hotel) => (
        <div
          className="col-xl-3 col-lg-3 col-sm-6"
          key={hotel.id}
        >
          <div className="hotelsCard -type-1 hover-inside-slider border block rounded">
            <Link target="_blank" href={getHotelUrl(hotel)} className="hotelsCard__image rounded-bottom-0">
              <div className="cardImage overflow-hidden">
                <div className="">
                  <Slider
                    {...itemSettings}
                    dots={true}
                    // arrows={true}
                    // nextArrow={<ArrowSlick type="next" />}
                    // prevArrow={<ArrowSlick type="prev" />}
                  >
                    {hotel.imageUrls?.map((slide, i) => (
                      <Image
                        key={`hotel-image-${i}`}
                        className="aspect-[14/10] object-cover"
                        src={slide}
                        alt={hotel.name}
                        width={600}
                        height={600*14/10}
                      />
                    ))}
                  </Slider>
                  {/*{hotel.featuredImageUrl && hotel.featuredImageUrl !== '' && hotel.featuredImageUrl !== 'undefined' ? (*/}
                  {/*  <Image*/}
                  {/*    className="aspect-[14/10] object-cover"*/}
                  {/*    src={hotel.featuredImageUrl}*/}
                  {/*    alt={hotel.name}*/}
                  {/*    width={600}*/}
                  {/*    height={600*14/10}*/}
                  {/*  />*/}
                  {/*) : null}*/}
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
            </Link>
            <div className="hotelsCard__content p-[14px]">
              <Link target="_blank" href={getHotelUrl(hotel)}>
                <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500 line-clamp-1">
                  <span>{hotel.name}</span>
                </h4>
                <h4 className="hotelsCard__title text-dark-1 text-14 lh-16 fw-500 line-clamp-1 mb-[5px]">
                  <span>{hotel.nameEn}</span>
                </h4>
                <div className="text-yellow-500 flex mb-[8px]">
                  {new Array(hotel.starRating).fill(0).map((_, index) => (
                    <svg key={`star-${index}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 lh-14 text-14 mb-[10px]">
                  {hotel.city}
                  {hotel.area ? (
                    <>
                      {hotel.area}
                    </>
                  ) : null}
                  ，{hotel.nearestMetroStation.name}地鐵站步行約{Math.round(hotel.nearestMetroStation.distance/5.1*60)}分鐘，
                  推薦使用{hotel.nearestCheckPoint.name}過境
                </p>

                <div className="bg-slate-100 p-[10px] mb-[20px] rounded-4">
                  <p className="font-bold text-brand lh-14 text-14 mb-[8px]">酒店附近景點</p>
                  <ul className="list space-y-2.5">
                    {hotel.places.map(place => (
                      <li key={`nearby-places-${place.id}`} className="flex items-center gap-1.5">
                        {renderIcon(place)}
                        <p className="text-slate-700 text-14 lh-12">{place.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="d-flex items-center mb-[16px]">
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
              </Link>

              {/*{hotel.description ? (*/}
              {/*  <div className="text-sm line-clamp-3 mt-[10px] mb-[20px] text-gray-600">*/}
              {/*    {hotel.description}*/}
              {/*  </div>*/}
              {/*) : null}*/}

              <div className={`mt-10 grid gap-2 ${hotel.agodaUrl && hotel.tripUrl ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {hotel.tripUrl ? (
                  <Link href={`/r/${encodeURIComponent(hotel.tripUrl)}`} target="_blank" className="fw-500 bg-gray-100 flex justify-between items-center rounded p-[8px]">
                    <div>
                      <div className="font-semibold text-xs mb-[1px]">Trip.com</div>
                      <div className="text-blue-1 text-sm">
                        {hotel.priceTrip ? (
                          <span className="font-bold">HK${Math.round(hotel.priceTrip).toLocaleString()}</span>
                        ) : (
                          <span className="font-bold text-[12px]">查看至抵價格</span>
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
                          <span className="font-bold">HK${Math.round(hotel.priceAgoda).toLocaleString()}起</span>
                        ) : (
                          <span className="font-bold text-[12px]">查看至抵價格</span>
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
