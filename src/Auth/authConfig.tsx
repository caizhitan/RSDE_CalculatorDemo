import env from '../env';

export const msalConfig= {
    auth: {
        clientId: env.REACT_APP_CLIENTID,
        authority: env.REACT_APP_MSAL_AUTHORITY,
        redirectUri: env.REACT_APP_REDIRECT,
        navigateToLoginRequestUrl: false,
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
};

export const loginRequest = {
    scopes: [env.REACT_APP_LOGINSCOPE]
};