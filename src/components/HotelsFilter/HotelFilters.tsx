'use client';

import Link from "next/link";
import {getChainColor, getChainIcon, getMetroLineColor, getRatingText, Hotel, HotelPlaceDistance} from "@/types/Hotel";
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

  if (!hotels) {
    return (
      <div className="py-[100px]">
        <div className="flex justify-center items-center">
          <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"/>
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="row y-gap-30">
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
                </div>
                {hotel.chainName ? (
                  <div className="cardImage__leftBadge">
                    <div className="bg-yellow-600 bg-red-500 bg-blue-600"/>
                    <div
                      className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 text-bold text-white flex gap-2 ${getChainColor(hotel.chainName)}`}
                    >
                      {getChainIcon(hotel.chainName) ? (
                        <Image className="rounded-[10px] bg-white" src={getChainIcon(hotel.chainName)!} alt={hotel.chainName} width={20} height={20} />
                      ) : null}
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
                <div className="d-flex items-center mb-[8px]">
                  <div className="flex-center bg-blue-1 rounded-4 size-30 text-14 fw-600 text-white">
                    {hotel.ratingAverage?.toFixed(1)}
                  </div>
                  <div className="text-14 text-dark-1 fw-500 ml-10">
                    {getRatingText(hotel.ratingAverage)}
                  </div>
                  <div className="text-xs text-light-1 ml-10">
                    {hotel.numberOfReviews} 評價
                  </div>
                </div>
                <p className="text-slate-600 lh-14 text-14 mb-[16px]">
                  {hotel.city}
                  {hotel.area ? (
                    <>
                      {hotel.area}
                    </>
                  ) : null}
                  ，{hotel.nearestMetroStation.name}地鐵站步行約{Math.round(hotel.nearestMetroStation.distance/5.1*60)}分鐘，
                  推薦使用{hotel.nearestCheckPoint.name}過境
                </p>

                <p className="font-bold text-brand lh-14 text-14 mb-[8px]">酒店附近景點</p>
                <div className="bg-slate-100 p-[10px] mb-[20px] rounded-4">
                  <ul className="list space-y-2.5">
                    {hotel.places.map(place => (
                      <li key={`nearby-places-${place.id}`} className="flex items-center gap-1.5">
                        {renderIcon(place)}
                        <p className="text-slate-700 text-14 lh-12">{place.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>

              {hotel.checkPointMetroGuide.length > 0 ? (
                <div className="metro-guide">
                  <p className="font-bold text-brand lh-14 text-14 mb-[8px]">地鐵指南</p>
                  <div className="bg-[#2DB351] bg-[#C05700] bg-[#4EA6C2] bg-[#D22F10] bg-[#9B50A4] bg-[#40C5B8] bg-[#1634AF] bg-[#B85808] bg-[#896974] bg-[#896974] bg-[#701C3E] bg-[#A293AD] bg-[#CE820D] bg-[#E3CD70] bg-[#3817A7] bg-[#9CDCE1]" />
                  <Slider
                    speed={500}
                    infinite={false}
                    dots={true}
                    arrows={false}
                  >
                    {hotel.checkPointMetroGuide.map(guide => (
                      <div key={`checkpoint-metro-guide-${guide.id}`} className="bg-slate-100 p-[10px] mb-[40px] rounded-4 select-none">
                        <p className="font-semibold text-slate-800 lh-14 text-14 mb-[6px]">{guide.checkPoint}出發</p>
                        <div className="space-y-2.5">
                          <div className="text-slate-700">
                            <div className="flex gap-1 items-center mb-1">
                              {/*<p className="text-slate-700 text-14 lh-12">*/}
                              {/*  {guide.checkPoint}：*/}
                              {/*</p>*/}
                              <div className="flex items-center gap-1 mb-0">
                                <span className="text-14">乘搭</span>
                                {guide.routes.map((route, index) => (
                                  <div key={`route-${guide.id}-${index}`} className="flex items-center">
                                    <div className={`text-xs rounded flex text-white justify-center items-center font-bold w-[18px] h-[18px] ${getMetroLineColor(route.lineNumber)}`}>
                                      {route.lineNumber}
                                    </div>
                                    {index < guide.routes.length - 1 ? (
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                      </svg>
                                    ) : (
                                      <>
                                        <span className="text-14 ml-[4px]">號線</span>
                                      </>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <p className="text-slate-700 text-14 lh-12">
                              共{guide.routes.reduce((acc, route) => (acc + route.numberOfStops), 0)}個站，需時約{Math.round(guide.routes.reduce((acc, route) => (acc + route.duration), 0)/60)+5}分鐘
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              ) : null}

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
                          <span className="font-bold">HK${Math.round(hotel.priceTrip).toLocaleString()}起</span>
                        ) : (
                          <>
                            {hotel.priceAgoda ? (
                              <span className="font-bold">HK${Math.round(hotel.priceAgoda / 1.005).toLocaleString()}起</span>
                            ) : (
                              <span className="font-bold text-[12px]">查看至抵價格</span>
                            )}
                          </>
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
                          <>
                            {hotel.priceTrip ? (
                              <span className="font-bold">HK${Math.round(hotel.priceTrip * 1.005).toLocaleString()}起</span>
                            ) : (
                              <span className="font-bold text-[12px]">查看至抵價格</span>
                            )}
                          </>
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
    </div>
  );
};

export default HotelFilters;
