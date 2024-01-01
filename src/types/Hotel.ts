export interface Hotel {
  id: number;
  slug: string;
  name: string;
  nameEn: string;
  chainName?: string;
  city: string;
  country: string;
  area?: string;
  featuredImageUrl: string;
  starRating: number;
  ratingAverage: number;
  numberOfReviews: number;
  agodaUrl?: string;
  tripUrl?: string;
  price: number;
  tags: string[];
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