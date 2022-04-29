import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }


  obtenerFechaActualMYSQL(): string {
    let hoy = Date.now();
    let date = new Date(hoy);
    let anio = date.getFullYear();
    let mes = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
    let dia = date.getDay() < 10 ? '0' + date.getDay() : date.getDay();
    let cadena = anio + '-' + mes + '-' + dia;
    return cadena;
  }
}
