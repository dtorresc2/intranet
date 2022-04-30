import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  HEADERS: any;

  constructor(
    private http: HttpClient
  ) {
    this.HEADERS = new HttpHeaders();
    this.HEADERS.set('Content-Type', 'application/json; charset=utf-8');
    this.HEADERS.set('Access-Control-Allow-Origin', '*');
  }

  registrarS3(nombre, buffer): Promise<any> {
    let auxNombre = 'biblioteca/' + nombre;
    let aux = {
      "NOMBRE": auxNombre,
      "BUFFER": buffer
    };

    return new Promise((resolve, reject) => {
      this.http.post(environment.S3_SERVICE + 'insertar', aux, { headers: this.HEADERS }).toPromise().then(
        res => {
          resolve(res);
        },
        msg => {
          reject(msg);
        })
    });
  }

  registrarDocumento(nombre, tamanio): Promise<any> {
    let aux = {
      "params": [
        "0",
        "biblioteca/",
        "1",
        "",
        nombre,
        tamanio,
        4,
        "1"
      ]
    };

    return new Promise((resolve, reject) => {
      this.http.post(environment.API_URL + environment.REGISTRAR_DOCUMENTO, aux, { headers: this.HEADERS }).toPromise().then(
        res => {
          resolve(res);
        },
        msg => {
          reject(msg);
        })
    });
  }

  obtenerDocumentos(): Promise<any> {
    let aux = {
      "params": ["0"]
    };

    return new Promise((resolve, reject) => {
      this.http.post(environment.API_URL + environment.LISTAR_DOCUMENTOS, aux, { headers: this.HEADERS }).toPromise().then(
        res => {
          resolve(res);
        },
        msg => {
          reject(msg);
        })
    });
  }
  
  eliminarDocumento(id): Promise<any> {
    let aux = {
      "params": [
        id
      ]
    };

    return new Promise((resolve, reject) => {
      this.http.post(environment.API_URL + environment.ELIMINAR_DOCUMENTOS, aux, { headers: this.HEADERS }).toPromise().then(
        res => {
          resolve(res);
        },
        msg => {
          reject(msg);
        })
    });
  }

  eliminarS3(nombre): Promise<any> {
    let auxNombre = 'biblioteca/' + nombre;
    let aux = {
      "NOMBRE": auxNombre
    };

    return new Promise((resolve, reject) => {
      this.http.post(environment.S3_SERVICE + 'eliminar', aux, { headers: this.HEADERS }).toPromise().then(
        res => {
          resolve(res);
        },
        msg => {
          reject(msg);
        })
    });
  }
}
