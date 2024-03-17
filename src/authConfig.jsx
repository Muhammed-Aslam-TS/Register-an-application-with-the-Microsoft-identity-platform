import { LogLevel } from "@azure/msal-browser";
import { clientId,authority,redirectUri } from "../config";

export const msalConfig = {
  auth: {
    clientId: clientId, // From Azure AD app registration
    authority:authority , // Replace with your tenant ID
    // authority: `https://login.microsoftonline.com/YOUR_TENANT_ID/v2.0`, // Replace with your tenant ID
    redirectUri: redirectUri, // Replace with your production redirect URI later
    postLogoutRedirectUri: "/",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage", // Replace with 'localStorage' if needed
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containspii) => {
        if (containspii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: [`user.read`],
};
