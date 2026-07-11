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

export interface CrisisSubPageData {
  id: number;
  documentId: string;
  slug: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: StrapiImage;
  proverb?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
  card1Title?: string;
  card1Body?: string;
  card2Title?: string;
  card2Body?: string;
  card3Title?: string;
  card3Body?: string;
  card4Title?: string;
  card4Body?: string;
}

export async function fetchCrisisSubPages(): Promise<CrisisSubPageData[]> {
  if (!STRAPI_URL || !USE_STRAPI) {
    return [];
  }

  try {
    const res = await fetch(`${STRAPI_URL}/api/crisis-sub-pages?populate=*`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.warn('Failed to fetch crisis sub pages:', res.statusText);
      return [];
    }
    const json = await res.json();
    return json.data || [];
  } catch (error: any) {
    if (error && (error.digest === 'DYNAMIC_SERVER_USAGE' || error.message?.includes('Dynamic server usage'))) {
      throw error;
    }
    console.error('Error fetching crisis sub pages:', error);
    return [];
  }
}
export interface OurWorkPageData {
  prog1Eyebrow?: string;
  prog1Title?: string;
  prog1Description?: string;
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
  prog2Card1Title?: string;
  prog2Card1Body?: string;
  prog2MetricLabel?: string;
  prog2MetricValue?: number;
  prog2MetricSuffix?: string;
  prog2MetricDesc?: string;
  prog2MetricDetail?: string;

  prog3Title?: string;
  prog3Description?: string;
  prog3Card1Title?: string;
  prog3Card1Body?: string;

  methodTitle?: string;
  methodDescription?: string;
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
  prog1Image?: StrapiImage;
  prog1MetricBg?: StrapiImage;
  prog2Image?: StrapiImage;
  prog3Image?: StrapiImage;
  methodImage?: StrapiImage;
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

export interface TheHuiPageData {
  storyEyebrow?: string;
  storyTitle?: string;
  storyProverb?: string;
  storyImage?: StrapiImage;
  storyCard1Title?: string;
  storyCard1Body?: string;
  storyCard2Title?: string;
  storyCard2Body?: string;
  storyCard3Title?: string;
  storyCard3Body?: string;

  teamEyebrow?: string;
  teamTitle?: string;
  teamDescription?: string;
  leader1Name?: string;
  leader1Role?: string;
  leader1Desc?: string;
  leader2Name?: string;
  leader2Role?: string;
  leader2Desc?: string;
  openRole1Title?: string;
  openRole1Desc?: string;
  openRole2Title?: string;
  openRole2Desc?: string;
  openRole3Title?: string;
  openRole3Desc?: string;
  openRoleNote?: string;
  advisor1?: string;
  advisor2?: string;
  advisor3?: string;
  advisor4?: string;

  partnersEyebrow?: string;
  partnersTitle?: string;
  partnersDescription?: string;
  partnerMode1Title?: string;
  partnerMode1Desc?: string;
  partnerMode2Title?: string;
  partnerMode2Desc?: string;
  partnerMode3Title?: string;
  partnerMode3Desc?: string;
  targetPartner1?: string;
  targetPartner2?: string;
  targetPartner3?: string;
  targetPartner4?: string;
  targetPartner5?: string;
  targetPartner6?: string;
}

export async function fetchTheHuiPageData(): Promise<TheHuiPageData | null> {
  if (!STRAPI_URL || !USE_STRAPI) {
    return null;
  }

  try {
    const res = await fetch(`${STRAPI_URL}/api/the-hui-page?populate=*`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.warn('Failed to fetch the hui page data from Strapi:', res.statusText);
      return null;
    }
    const json = await res.json();
    return json.data || null;
  } catch (error: any) {
    if (error && (error.digest === 'DYNAMIC_SERVER_USAGE' || error.message?.includes('Dynamic server usage'))) {
      throw error;
    }
    console.error('Error fetching the hui page data from Strapi:', error);
    return null;
  }
}

export interface GetInvolvedPageData {
  investEyebrow?: string;
  investTitle?: string;
  investDescPrefix?: string;
  investDescBold?: string;
  investDescSuffix?: string;
  seedFundsTitle?: string;
  fundUse1Label?: string; fundUse1Amount?: string; fundUse1Percent?: number; fundUse1Color?: string;
  fundUse2Label?: string; fundUse2Amount?: string; fundUse2Percent?: number; fundUse2Color?: string;
  fundUse3Label?: string; fundUse3Amount?: string; fundUse3Percent?: number; fundUse3Color?: string;
  fundUse4Label?: string; fundUse4Amount?: string; fundUse4Percent?: number; fundUse4Color?: string;
  investTiersTitle?: string;
  tier1Name?: string; tier1Amount?: string; tier1Desc?: string;
  tier2Name?: string; tier2Amount?: string; tier2Desc?: string;
  tier3Name?: string; tier3Amount?: string; tier3Desc?: string;
  tier4Name?: string; tier4Amount?: string; tier4Desc?: string;
  tier5Name?: string; tier5Amount?: string; tier5Desc?: string;

  volEyebrow?: string;
  volTitle?: string;
  volDescription?: string;
  volActivity1?: string;
  volActivity2?: string;
  volActivity3?: string;
  volActivity4?: string;
  volActivity5?: string;
  volActivity6?: string;
  volCtaTitle1?: string;
  volCtaTitleHighlight?: string;
  volCtaTitle2?: string;
  volCtaDesc?: string;
  volCtaBtnText?: string;
  volCtaBtnLink?: string;
  volCtaBgImage?: StrapiImage;

  partnerEyebrow?: string;
  partnerTitle?: string;
  partnerWhoTitle?: string;
  partnerWho1?: string;
  partnerWho2?: string;
  partnerWho3?: string;
  partnerWho4?: string;
  partnerOffersTitle?: string;
  partnerOffer1?: string;
  partnerOffer2?: string;
  partnerOffer3?: string;
  partnerOffer4?: string;
  partnerContactTitle?: string;
  partnerEmail?: string;
  partnerPhone?: string;
  partnerIg?: string;
}

export async function fetchGetInvolvedPageData(): Promise<GetInvolvedPageData | null> {
  if (!STRAPI_URL || !USE_STRAPI) {
    return null;
  }

  try {
    const res = await fetch(`${STRAPI_URL}/api/get-involved-page?populate=*`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.warn('Failed to fetch the get involved page data from Strapi:', res.statusText);
      return null;
    }
    const json = await res.json();
    return json.data || null;
  } catch (error: any) {
    if (error && (error.digest === 'DYNAMIC_SERVER_USAGE' || error.message?.includes('Dynamic server usage'))) {
      throw error;
    }
    console.error('Error fetching the get involved page data from Strapi:', error);
}
}


