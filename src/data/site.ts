// Central source of truth for Dassam Falls attraction facts and SEO identity.
// Dated third-party Maps snapshot checked 29 October 2026; not guide-collected reviews.

// SEO site-name format: 景点名称 + 城市 + 旅游指南
// => "दशम जलप्रपात राँची — यात्रा मार्गदर्शिका" (Dassam Falls + Ranchi + Travel Guide)
export const SITE_NAME = 'दशम जलप्रपात राँची — यात्रा मार्गदर्शिका';

export function withSiteName(suffix: string): string {
  return `${suffix} | ${SITE_NAME}`;
}

export const ATTRACTION = {
  name: 'Dassam Falls',
  alternateName: ['दशम जलप्रपात', 'दशम फॉल्स', 'Dassam Ghagh'],
  rating: 4.5,
  reviewCount: 16158,
  heightFeet: 144,
  river: 'Kanchi River',
  address: {
    streetAddress: '4FW8+GV5, Tarub',
    locality: 'Ranchi district',
    region: 'Jharkhand',
    postalCode: '835204',
    country: 'IN',
  },
  geo: {
    latitude: 23.1462515,
    longitude: 85.4672203,
  },
  plusCode: '4FW8+GV5',
  mapsUrl: 'https://maps.app.goo.gl/E5Qsa6k4WQFZrChz6',
  distanceFromRanchiKm: '34–45',
} as const;
