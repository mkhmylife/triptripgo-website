import {SZ} from "@/lib/metroLocation";
import {calcDistance} from "@/lib/calcDistance";
import {CheckPoints} from "@/lib/checkPoints";

export interface MetroRoute {
  lineNumber: number;
  arrivalStop: string;
  departureStop: string;
  numberOfStops: number;
  duration: number;
}

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
  checkPointMetroGuide: {
    id: number;
    checkPoint: string;
    routes: MetroRoute[];
    totalDuration: number;
    totalNumberOfStops: number;
  }[];
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
      return 'bg-blue-600';
    case "凱悅 Hyatt":
      return 'bg-blue-600';
    case "四季 Four Seasons":
      return 'bg-black';
  }
  return 'bg-blue-600'
}

export const getChainIcon = (chainName: string) => {
  switch (chainName) {
    case "萬豪 Marriott":
      return '/images/icon/bonvoy.png';
    case "凱悅 Hyatt":
      return '/images/icon/hyatt.png';
    case "希爾頓 Hilton":
      return '/images/icon/hilton.png';
    case "四季 Four Seasons":
      return '/images/icon/four-seasons.png';
    case "亞朵 Atour":
    case "維也納 Vienna":
    case "錦江之星 Jinjiang":
  }
  return null;
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

export const getMetroLineColor = (line: number) => {
  switch (line) {
    case 1:
      return 'bg-[#2DB351]';
    case 2:
      return 'bg-[#C05700]';
    case 3:
      return 'bg-[#4EA6C2]';
    case 4:
      return 'bg-[#D22F10]';
    case 5:
      return 'bg-[#9B50A4]';
    case 6:
      return 'bg-[#40C5B8]';
    case 7:
      return 'bg-[#1634AF]';
    case 8:
      return 'bg-[#B85808]';
    case 9:
      return 'bg-[#896974]';
    case 10:
      return 'bg-[#896974]';
    case 11:
      return 'bg-[#701C3E]';
    case 12:
      return 'bg-[#A293AD]';
    case 13:
      return 'bg-[#CE820D]';
    case 14:
      return 'bg-[#E3CD70]';
    case 16:
      return 'bg-[#3817A7]';
    case 20:
      return 'bg-[#9CDCE1]';
    default:
      return 'bg-grey-500';
  }
}