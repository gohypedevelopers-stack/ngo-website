export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  name?: string;
  width?: number;
  height?: number;
}

export interface HomepageData {
  heroSubtitle?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroPrimaryBtnText?: string;
  heroPrimaryBtnLink?: string;
  heroSecondaryBtnText?: string;
  heroSecondaryBtnLink?: string;
  heroTertiaryBtnText?: string;
  heroTertiaryBtnLink?: string;
  heroBannerImage?: StrapiImage;
  heroScubaDiverImage?: StrapiImage;
  heroManufacturingImage?: StrapiImage;
  crisisLabel?: string;
  crisisTitle?: string;
  crisisBody?: string;
  crisisQuote?: string;
  crisisImage?: StrapiImage;
  crisisSecondaryBody?: string;
  problem1Title?: string;
  problem1Body?: string;
  problem2Title?: string;
  problem2Body?: string;
  problem3Title?: string;
  problem3Body?: string;
  solutionLabel?: string;
  solutionTitle?: string;
  solutionBody?: string;
  solutionImage?: StrapiImage;
  solutionProg1Emoji?: string;
  solutionProg1Title?: string;
  solutionProg1Body?: string;
  solutionProg2Emoji?: string;
  solutionProg2Title?: string;
  solutionProg2Body?: string;
  solutionProg3Emoji?: string;
  solutionProg3Title?: string;
  solutionProg3Body?: string;
  scienceLabel?: string;
  scienceTitle?: string;
  scienceBody?: string;
  scienceMetric1Value?: number;
  scienceMetric1Prefix?: string;
  scienceMetric1Suffix?: string;
  scienceMetric1Decimals?: number;
  scienceMetric1Desc?: string;
  scienceMetric2Value?: number;
  scienceMetric2Prefix?: string;
  scienceMetric2Suffix?: string;
  scienceMetric2Decimals?: number;
  scienceMetric2Desc?: string;
  scienceMetric3Value?: number;
  scienceMetric3Prefix?: string;
  scienceMetric3Suffix?: string;
  scienceMetric3Decimals?: number;
  scienceMetric3Desc?: string;
  teamLabel?: string;
  teamTitle?: string;
  teamBody?: string;
  teamImage?: StrapiImage;
  teamMembers?: TeamMember[];
  upenaLabel?: string;
  upenaTitle?: string;
  upenaBody?: string;
  upenaBtnText?: string;
  upenaBtnLink?: string;
  upenaImage?: StrapiImage;
  upenaMetric1Value?: string;
  upenaMetric1Unit?: string;
  upenaMetric1Label?: string;
  upenaMetric2Value?: string;
  upenaMetric2Unit?: string;
  upenaMetric2Label?: string;
  upenaMetric3Value?: string;
  upenaMetric3Unit?: string;
  upenaMetric3Label?: string;
  printedCanoesLabel?: string;
  printedCanoesTitle?: string;
  printedCanoesBody?: string;
  printedCanoesProductTag?: string;
  printedCanoesProductTitle?: string;
  printedCanoesProductImage?: StrapiImage;
  printedCanoesProductFeatures?: ProductFeature[];
  printedCanoesBtnText?: string;
  printedCanoesBtnLink?: string;
}

export interface ProductFeature {
  id: number;
  title: string;
  description: string;
  icon: 'settings' | 'feather' | 'tag' | 'info' | 'star' | 'shield';
}

export interface TeamMember {
  id: number;
  initials: string;
  role: string;
  name: string;
  bio: string;
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
export const USE_STRAPI = process.env.NEXT_PUBLIC_USE_STRAPI === 'true';

export function getStrapiMediaUrl(media: StrapiImage | undefined | null): string | null {
  if (!media || !media.url) return null;
  if (media.url.startsWith('http') || media.url.startsWith('https')) {
    return media.url;
  }
  if (media.url.startsWith('/uploads/')) {
    return STRAPI_URL ? `${STRAPI_URL}${media.url}` : media.url;
  }
  if (media.url.startsWith('/')) {
    return media.url;
  }
  return STRAPI_URL ? `${STRAPI_URL}${media.url}` : media.url;
}

export async function fetchHomepageData(): Promise<HomepageData | null> {
  if (!STRAPI_URL || !USE_STRAPI) {
    return null;
  }

  try {
    const res = await fetch(`${STRAPI_URL}/api/homepage?populate=*`, {
      cache: 'no-store', // ensures we fetch fresh data on every request
    });
    if (!res.ok) {
      console.warn('Failed to fetch homepage data from Strapi:', res.statusText);
      return null;
    }
    const json = await res.json();
    return json.data || null;
  } catch (error: any) {
    if (error && (error.digest === 'DYNAMIC_SERVER_USAGE' || error.message?.includes('Dynamic server usage'))) {
      throw error;
    }
    console.error('Error fetching homepage data from Strapi:', error);
    return null;
  }
}

export interface CrisisPageData {
  sec1Eyebrow?: string;
  sec1Title?: string;
  sec1Subtitle?: string;
  sec1Description?: string;
  sec1Image?: StrapiImage;
  sec1GridTitle?: string;
  sec2Eyebrow?: string;
  sec2Title?: string;
  sec2Subtitle?: string;
  sec2Description?: string;
  sec2Image?: StrapiImage;
  sec2GridTitle?: string;
  sec3Eyebrow?: string;
  sec3Title?: string;
  sec3Subtitle?: string;
  sec3Description?: string;
  sec3Image?: StrapiImage;
  sec3GridTitle?: string;
  sec1Card1Title?: string;
  sec1Card1Body?: string;
  sec1Card2Title?: string;
  sec1Card2Body?: string;
  sec1Card3Title?: string;
  sec1Card3Body?: string;
  sec1Card4Title?: string;
  sec1Card4Body?: string;
  sec1Proverb?: string;
  sec2Card1Title?: string;
  sec2Card1Body?: string;
  sec2Card2Title?: string;
  sec2Card2Body?: string;
  sec2Card3Title?: string;
  sec2Card3Body?: string;
  sec2Card4Title?: string;
  sec2Card4Body?: string;
  sec2Card5Title?: string;
  sec2Card5Body?: string;
  sec2LawBannerBody?: string;
  sec3Card1Title?: string;
  sec3Card1Body?: string;
  sec3Card2Title?: string;
  sec3Card2Body?: string;
  sec3Card3Title?: string;
  sec3Card3Body?: string;
  sec3Proverb?: string;
}

export async function fetchCrisisPageData(): Promise<CrisisPageData | null> {
  if (!STRAPI_URL || !USE_STRAPI) {
    return null;
  }

  try {
    const res = await fetch(`${STRAPI_URL}/api/crisis-page?populate=*`, {
      cache: 'no-store', // ensures we fetch fresh data on every request
    });
    if (!res.ok) {
      console.warn('Failed to fetch crisis page data from Strapi:', res.statusText);
      return null;
    }
    const json = await res.json();
    return json.data || null;
  } catch (error: any) {
    if (error && (error.digest === 'DYNAMIC_SERVER_USAGE' || error.message?.includes('Dynamic server usage'))) {
      throw error;
    }
    console.error('Error fetching crisis page data from Strapi:', error);
    return null;
  }
}


export interface OurWorkPageData {
  prog1Eyebrow?: string;
  prog1Title?: string;
  prog1Description?: string;
  prog1Image?: StrapiImage;
  prog1MetricBg?: StrapiImage;
  prog1Card1Title?: string;
  prog1Card1Body?: string;
  prog1Card2Title?: string;
  prog1Card2Body?: string;
  prog1MetricLabel?: string;
  prog1MetricValue?: number;
  prog1MetricSuffix?: string;
  prog1MetricDesc?: string;
  prog1MetricDetail?: string;

  prog2Title?: string;
  prog2Description?: string;
  prog2Image?: StrapiImage;
  prog2Card1Title?: string;
  prog2Card1Body?: string;
  prog2MetricLabel?: string;
  prog2MetricValue?: number;
  prog2MetricSuffix?: string;
  prog2MetricDesc?: string;
  prog2MetricDetail?: string;

  prog3Title?: string;
  prog3Description?: string;
  prog3Image?: StrapiImage;
  prog3Card1Title?: string;
  prog3Card1Body?: string;

  methodTitle?: string;
  methodDescription?: string;
  methodImage?: StrapiImage;
  methodCard1Title?: string;
  methodCard1Body?: string;
  methodMetricLabel?: string;
  methodMetricValue?: number;
  methodMetricSuffix?: string;
  methodMetricDesc?: string;
  methodMetricDetail?: string;
  methodPillar1Title?: string;
  methodPillar1Body?: string;
  methodPillar2Title?: string;
  methodPillar2Body?: string;
  methodPillar3Title?: string;
  methodPillar3Body?: string;
}

export async function fetchOurWorkPageData(): Promise<OurWorkPageData | null> {
  if (!STRAPI_URL || !USE_STRAPI) {
    return null;
  }

  try {
    const res = await fetch(`${STRAPI_URL}/api/our-work-page?populate=*`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.warn('Failed to fetch our work page data from Strapi:', res.statusText);
      return null;
    }
    const json = await res.json();
    return json.data || null;
  } catch (error: any) {
    if (error && (error.digest === 'DYNAMIC_SERVER_USAGE' || error.message?.includes('Dynamic server usage'))) {
      throw error;
    }
    console.error('Error fetching our work page data from Strapi:', error);
    return null;
  }
}


