// Central source of truth for Dassam Falls attraction facts and SEO identity.
// Third-party Google Maps snapshot checked 4 November 2026; reviews are not collected by this guide.
// Official facts cross-checked against Jharkhand Tourism, Ranchi District, Jharkhand Government
// and Incredible India. Conflicting / volatile facts are disclosed rather than flattened.

// SEO site-name format: attraction name + city + travel guide
// => "दशम जलप्रपात राँची — यात्रा मार्गदर्शिका"
export const SITE_NAME = 'दशम जलप्रपात राँची — यात्रा मार्गदर्शिका';

export function withSiteName(suffix: string): string {
  return `${suffix} | ${SITE_NAME}`;
}

// Last fact-check / publication date used across the site and topic pages.
export const CHECKED_DATE = '4 नवंबर 2026';
export const CHECKED_DATE_ISO = '2026-11-04';
export const CHECK_LINE = `तथ्य-जाँच: ${CHECKED_DATE}।`;

export const ATTRACTION = {
  name: 'Dassam Falls',
  alternateName: ['दशम जलप्रपात', 'दशम फॉल्स', 'Dassam Ghagh', 'Dassam Fall'],
  rating: 4.5,
  reviewCount: 16179,
  heightFeet: 144,
  heightMeters: 44,
  river: 'Kanchi River',
  riverLocal: 'काँची नदी',
  riverAlternateSpelling: 'Kachni',
  riverSystem: 'Subarnarekha River',
  riverSystemLocal: 'सुवर्णरेखा नदी',
  bestSeason: 'अक्टूबर से जनवरी',
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
  // Ranchi District ~34 km, Jharkhand Government ~40 km, Jharkhand Tourism ~45 km.
  // Keep the range instead of asserting one absolute figure.
  distanceFromRanchiKm: '35–45',
} as const;

// Official / primary source ledger. Each topic page records the sources it relies on,
// the check date, and whether the fact is volatile (fees, hours, transport, closures).
export const OFFICIAL_SOURCES = [
  {
    label: 'झारखण्ड पर्यटन · Jharkhand Tourism',
    url: 'https://tourism.jharkhand.gov.in/destinationDetails/64',
    use: 'काँची नदी, लगभग 44 मीटर ऊँचाई, अक्टूबर–जनवरी का सुझाव, लगभग 45 किमी',
  },
  {
    label: 'राँची जिला प्रशासन · Ranchi District',
    url: 'https://ranchi.nic.in/tourist-place/dassam-fall/',
    use: 'स्थान, लगभग 34 किमी, Kachni वर्तनी',
  },
  {
    label: 'झारखण्ड सरकार · Government of Jharkhand',
    url: 'https://jharkhand.gov.in/home/AboutTourism',
    use: 'राज्य स्तरीय विवरण, लगभग 40 किमी',
  },
  {
    label: 'Incredible India',
    url: 'https://www.incredibleindia.gov.in/en/jharkhand/ranchi/dassam-falls',
    use: 'काँची नदी, भूगोल, तेज धारा और पानी में न उतरने की चेतावनी',
  },
  {
    label: 'Ranchi Tourism · ज़िला पर्यटन पृष्ठ',
    url: 'https://ranchi.nic.in/tourism/',
    use: 'राँची के अन्य जलप्रपात व पर्यटन संदर्भ',
  },
  {
    label: 'राँची जिला · घोषणाएँ',
    url: 'https://ranchi.nic.in/notice_category/announcements/',
    use: 'स्थानीय बंदी, प्रतिबंध और मौसम संबंधी सूचना',
  },
] as const;

export const INDEPENDENT_DISCLAIMER =
  'यह एक स्वतंत्र, गैर-सरकारी और गैर-लाभकारी पर्यटन व जन-शिक्षा गाइड है। यह सरकारी विभाग, जलप्रपात प्रबंधन या किसी व्यावसायिक ऑपरेटर से संबद्ध नहीं है।';

export const VOLATILE_NOTE =
  'खुलने का समय, प्रवेश शुल्क, पार्किंग, बस सेवा, रास्तों की स्थिति और सुविधाएँ बदल सकती हैं। इनके लिए आधिकारिक या स्थल-प्रबंधन की ताज़ा सूचना ही अंतिम मानें; यह पृष्ठ लाइव स्थिति सेवा नहीं है।';
