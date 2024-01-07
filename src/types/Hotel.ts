import {SZ} from "@/lib/metroLocation";
import {calcDistance} from "@/lib/calcDistance";
import {CheckPoints} from "@/lib/checkPoints";

export interface HotelPlaceDistance {
  id: number;
  name: string;
  distance: number;
  group: string;
}

export interface Hotel {
  id: number;
  slug: string;
  name: string;
  nameEn: string;
  chainName?: string;
  city: string;
  country: string;
  area?: string;
  description?: string;
  featuredImageUrl: string;
  imageUrls: string[];
  starRating: number;
  ratingAverage: number;
  numberOfReviews: number;
  agodaUrl?: string;
  tripUrl?: string;
  priceAgoda?: number;
  priceTrip?: number;
  tags: string[];
  latitude: number;
  longitude: number;
  nearestMetroStation: HotelPlaceDistance;
  nearestCheckPoint: HotelPlaceDistance;
  places: HotelPlaceDistance[];
}

export const getChainColor = (chainName: string) => {
  switch (chainName) {
    case "亞朵 Atour":
    case "維也納 Vienna":
    case "錦江之星 Jinjiang":
      return 'bg-red-500';
    case "萬豪 Marriott":
      return 'bg-yellow-600';
    case "希爾頓 Hilton":
      return 'bg-black';
    case "凱悅 Hyatt":
      return 'bg-black';
  }
  return 'bg-blue-600'
}

export const getProviderName = (hotel: Hotel) => {
  if (hotel.agodaUrl) {
    return 'Agoda';
  }
  if (hotel.tripUrl) {
    return 'Trip.com';
  }
}

export const getRatingText = (ratingAverage: number) => {
  if (ratingAverage >= 9.5) {
    return '唔使諗';
  }
  if (ratingAverage >= 9) {
    return '冇得彈';
  }
  if (ratingAverage >= 8) {
    return '必住';
  }
  return '推介';
}
