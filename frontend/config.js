import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
  ? publicRuntimeConfig.API_PRODUCTION
  : publicRuntimeConfig.API_DEVELOPMENT;
export const APP_NAME = publicRuntimeConfig.APP_NAME;

export const DOMAIN = publicRuntimeConfig.PRODUCTION
  ? publicRuntimeConfig.DOMAIN_PRODUCTION
  : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

export const PRIVACY_PAGE = publicRuntimeConfig.PRIVACY_PAGE;
export const TERMS_PAGE = publicRuntimeConfig.TERMS_PAGE;
export const CONTACT_PAGE = publicRuntimeConfig.CONTACT_PAGE;
export const OLD_WEBSITE = publicRuntimeConfig.OLD_WEBSITE;

export const FB_AP_ID = publicRuntimeConfig.FB_AP_ID;
export const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME;
