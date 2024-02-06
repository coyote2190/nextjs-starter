import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { isMobile } from 'react-device-detect';

// Previous mobile app (made on native iOS and Android)
const isNativeMobileApp = (): boolean => {
  if (typeof window === 'undefined') return false;

  const MOBILE_APP_USER_AGENT_NATIVE_APP = 'mobileApp';

  return navigator.userAgent.indexOf(MOBILE_APP_USER_AGENT_NATIVE_APP) >= 0;
};

const isReactNativeMobileApp = (): boolean => {
  if (typeof window === 'undefined') return false;

  const MOBILE_APP_USER_AGENT_RN_APP = 'mobile bekom-app-';

  return navigator.userAgent.indexOf(MOBILE_APP_USER_AGENT_RN_APP) >= 0;
};

export const useIsMobileDevice = (): boolean =>
  isMobile || isNativeMobileApp() || isReactNativeMobileApp();

export const useIsReactNativeMobileApp = (): boolean => isReactNativeMobileApp();

export const useIsMobileApp = (): boolean => isNativeMobileApp() || isReactNativeMobileApp();

export const useIsDesktop = (): boolean => {
  const isMobileApp = useIsMobileApp();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  return mdUp && !isMobileApp;
};

export const useIsTablet = (): boolean => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  return mdUp && mdDown;
};

export const useIsDesktopResolution = (): boolean => {
  const theme = useTheme();
  const isAboveMdBreakpoint = useMediaQuery(theme.breakpoints.up('md'));
  return isAboveMdBreakpoint;
};

export const useIsMobileResolution = (): boolean => {
  const theme = useTheme();
  const isBelowMdBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
  return isBelowMdBreakpoint;
};
