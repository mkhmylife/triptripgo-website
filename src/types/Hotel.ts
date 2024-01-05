import {SZ} from "@/lib/metroLocation";

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
    return '必住';
  }
  return '推介';
}

export const getNearestMetroStation = (latitude: number, longitude: number) => {
  const calcDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const radlat1 = Math.PI * lat1 / 180;
    const radlat2 = Math.PI * lat2 / 180;
    const radlon1 = Math.PI * lon1 / 180;
    const radlon2 = Math.PI * lon2 / 180;
    const theta = lon1 - lon2;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    return dist * 1.609344;
  }
  const station = SZ.map((s) => {
    const distance = calcDistance(latitude, longitude, s.latitude, s.longitude);
    return {...s, ...{distance}}
  }).sort((a, b) => a.distance - b.distance)[0];
  return station;
}