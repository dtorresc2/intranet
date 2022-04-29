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

  obtenerUsuarioEspecifico(id): Promise<any> {
    let aux = {
      "params": [id]
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


  registrarUsuario(dpi, pnombre, snombre, papellido, sapellido, estado, rol, fechaN, correo) {
    let iniciales = pnombre.substring(0, 1) + snombre.substring(0, 1) + papellido.substring(0, 1) + sapellido.substring(0, 1);

    let aux = {
      "params": ["0", dpi, pnombre, snombre, papellido, sapellido, estado, rol, fechaN, iniciales, correo, "", "1"]
    };

    return new Promise((resolve, reject) => {
      this.http.post(environment.API_URL + environment.REGISTRAR_USUARIOS, aux, { headers: this.HEADERS }).toPromise().then(
        res => {
          resolve(res);
        },
        msg => {
          reject(msg);
        })
    });
  }

  actualizarUsuario(id, dpi, pnombre, snombre, papellido, sapellido, estado, rol, fechaN, correo) {
    let iniciales = pnombre.substring(0, 1) + snombre.substring(0, 1) + papellido.substring(0, 1) + sapellido.substring(0, 1);

    let aux = {
      "params": [id, dpi, pnombre, snombre, papellido, sapellido, estado, rol, fechaN, iniciales, correo, "", "0"]
    };

    return new Promise((resolve, reject) => {
      this.http.post(environment.API_URL + environment.REGISTRAR_USUARIOS, aux, { headers: this.HEADERS }).toPromise().then(
        res => {
          resolve(res);
        },
        msg => {
          reject(msg);
        })
    });
  }
}
