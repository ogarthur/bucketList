// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { ReCaptchaV3Provider } from "firebase/app-check";

export const environment = {
  production:false,
  firebase: {
    apiKey: "AIzaSyCfdiLoDIsAo1ewtncbFHOGQeeat7zHC2Y",
    authDomain: "bucketlist-357db.firebaseapp.com",
    projectId: "bucketlist-357db",
    storageBucket: "bucketlist-357db.appspot.com",
    messagingSenderId: "751601651493",
    appId: "1:751601651493:web:0670c4b49f746203f314cc",
    measurementId: "G-Y7F8EB76T7",
    provider: new ReCaptchaV3Provider('6LcFFUgjAAAAAKZ-8tiBgSH9C6JJEzLpq4_s8Ytu'),

    // Optional argument. If true, the SDK automatically refreshes App Check
    // tokens as needed.
    isTokenAutoRefreshEnabled: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
