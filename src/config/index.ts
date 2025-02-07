// file contains important infos about the app

export interface OpeningTime {
  day: string;
  time: string;
}

const openingTimes: OpeningTime[] = [
  { day: 'Maandag', time: '9:00 / 17:00' },
  { day: 'Dinsdag', time: '9:00 / 17:00' },
  { day: 'Woensdag', time: '9:00 / 17:00' },
  { day: 'Donderdag', time: '9:00 / 17:00' },
  { day: 'Vrijdag', time: '9:00 / 17:00' },
  { day: 'Zaterdag', time: 'Gesloten' },
  { day: 'Zondag', time: 'Gesloten' },
];
export const appConfig = {
  logoSrcImg: '/logo.svg',
  email: 'info@greenteam.nl',
  phoneNumber: '085 401 93 45',
  openingTimes,
  googleTagManagerId: 'GTM-TXKVLDJ',
  instagramAccount: 'https://www.instagram.com/greenteam.nl',
  tiktokAccount: 'https://www.tiktok.com/@greenteam.nl',
};
