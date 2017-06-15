// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBWK23QsdXkBixFMDpemeaALPAkrwh6I4c",
    authDomain: "movie-lists-79a91.firebaseapp.com",
    databaseURL: "https://movie-lists-79a91.firebaseio.com",
    projectId: "movie-lists-79a91",
    storageBucket: "movie-lists-79a91.appspot.com",
    messagingSenderId: "698884633558"
  }
};
