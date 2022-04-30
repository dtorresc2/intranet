// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  API_URL: 'http://api.repuestoscordero.click/sp/',
  S3_SERVICE: 'http://api.repuestoscordero.click/S3/',
  SE_URL: 'https://s3.amazonaws.com/repuestos-cordero/',

  // PROCEDIMIENTOS ALMACENADOS
  LISTAR_USUARIOS: 'SELECT_USUARIO',
  REGISTRAR_USUARIOS: 'Llenar_Usuario',
  ELIMINAR_USUARIOS: 'DELETE_USUARIO',
  REGISTRAR_DOCUMENTO: 'Llenar_DOCUMENTACION',
  LISTAR_DOCUMENTOS: 'SELECT_DOCUMENTACION',
  ELIMINAR_DOCUMENTOS: 'DELETE_DOCUMENTACION'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
