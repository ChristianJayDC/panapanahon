// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://weatherapi-com.p.rapidapi.com/current.json',
  xRapidApiHostHeaderName: 'X-RapidAPI-Host',
  xRapidApiHostHeaderValue: 'weatherapi-com.p.rapidapi.com',
  xRapidApiKeyHeaderName: 'X-RapidAPI-Key',
  xRapidApiKeyHeaderValue: '5f41965861msh28bf865305a8975p1acf92jsn05aa1eba7ed9'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.