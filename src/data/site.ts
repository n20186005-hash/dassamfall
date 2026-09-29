// Central source of truth for Dassam Falls attraction facts and SEO identity.
// Values synced from the Google Maps listing (16,063 reviews / 4.5, 2026-09).

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
  reviewCount: 16063,
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
    latitude: 23.14593,
    longitude: 85.467127,
  },
  plusCode: '4FW8+GV5',
  mapsUrl: 'https://maps.app.goo.gl/E5Qsa6k4WQFZrChz6',
  // Reference opening hours — local/seasonal variation possible.
  openingHours: {
    opens: '08:00',
    closes: '18:00',
  },
  distanceFromRanchiKm: '35–45',
} as const;
