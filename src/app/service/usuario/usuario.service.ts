import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  HEADERS: any;

  constructor(
    private http: HttpClient
  ) {
    this.HEADERS = new HttpHeaders();
    this.HEADERS.set('Content-Type', 'application/json; charset=utf-8');
    this.HEADERS.set('Access-Control-Allow-Origin', '*');
  }

  obtenerUsuarios(): Promise<any> {
    this.HEADERS = new HttpHeaders();
    this.HEADERS.set('Content-Type', 'application/json; charset=utf-8');
    this.HEADERS.set('Access-Control-Allow-Origin', '*');

    let aux = {
      "params": ["0"]
    };

    return new Promise((resolve, reject) => {
      this.http.post(environment.API_URL + environment.LISTAR_USUARIOS, aux, { headers: this.HEADERS }).toPromise().then(
        res => {
          resolve(res);
        },
        msg => {
          reject(msg);
        })
    });
  }

}
