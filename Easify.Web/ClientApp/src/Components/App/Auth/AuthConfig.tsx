import { Configuration } from 'msal';
import { MsalAuthProvider, LoginType } from 'react-aad-msal';

const config = {
    auth: {
        authority: 'https://login.microsoftonline.com/{45d53a40-131c-4896-94ef-8cd3538b3834}',
        clientId: 'b93bcf1f-198a-4f8e-969f-faf0cd407a64',
        redirectUri: window.location.origin,
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
    },
} as Configuration;

// Authentication Parameters
export const authenticationParameters = {
    scopes: [`b93bcf1f-198a-4f8e-969f-faf0cd407a64/.default`]
}

export const authenticationParametersGraph = {
    scopes: ['openid']
}

// Options
export const options = {
    loginType: LoginType.Redirect,
    tokenRefreshUri: window.location.origin
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)