/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */

'use client';

// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import GoogleRecaptchaWrapper from './recaptchaWrapper';

export function Providers({ children }: any) {
  return (
  // eslint-disable-next-line max-len
    /* <GoogleReCaptchaProvider scriptProps={{ defer: true, async: true }} reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY : ''}>
      {children}
    </GoogleReCaptchaProvider> */
    <GoogleRecaptchaWrapper>
      {children}
    </GoogleRecaptchaWrapper>
  );
}
