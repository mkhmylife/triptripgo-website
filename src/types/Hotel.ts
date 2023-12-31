export interface Hotel {
  id: number;
  slug: string;
  name: string;
  nameEn: string;
  city: string;
  country: string;
  // area: string;
  featuredImageUrl: string;
  starRating: number;
  ratingAverage: number;
  numberOfReviews: number;
  agodaUrl?: string;
  tripUrl?: string;
  price: number;
  tags: string[];
}