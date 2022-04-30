import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentoService } from 'src/app/service/documento/documento.service';
import { environment } from 'src/environments/environment';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-documentos-list',
  templateUrl: './documentos-list.component.html',
  styleUrls: ['./documentos-list.component.scss']
})
export class DocumentosListComponent implements OnInit {
  fileToUpload: File = null;
  base64Final: string = null;

  NOMBRE_ARCHIVO: any = '';
  TAMANO: any = '';

  DOCUMENTOS = [];

  carga: boolean = false;

  constructor(
    private modalService: NgbModal,
    private documentoService: DocumentoService
  ) { }

  async ngOnInit() {
    this.carga = false;
    this.DOCUMENTOS = await this.documentoService.obtenerDocumentos();
    this.carga = true;
  }

  openMediumModal(mediumModalContent) {
    this.modalService.open(mediumModalContent);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    const reader = new FileReader();

    this.NOMBRE_ARCHIVO = this.fileToUpload.name
    this.TAMANO = this.fileToUpload.size

    reader.readAsDataURL(this.fileToUpload);
    reader.onload = () => {
      const base64str = reader.result.toString();
      this.base64Final = base64str.split("base64,")[1];
    };
  }

  async registrarDocumento() {
    if (this.TAMANO > 0) {
      this.carga = false;
      await this.documentoService.registrarS3(this.NOMBRE_ARCHIVO, this.base64Final);
      await this.documentoService.registrarDocumento(this.NOMBRE_ARCHIVO, this.TAMANO);
      this.modalService.dismissAll();
      this.DOCUMENTOS = await this.documentoService.obtenerDocumentos();
      this.carga = true;
    }
    else {
      Swal.fire({
        title: 'Documentos',
        text: 'Falta el archivo o nombre de archivo',
        icon: 'warning',
        confirmButtonText: 'OK',
        showCloseButton: true
      });
    }
  }

  verArchivo(ruta, nombre) {
    return environment.SE_URL + ruta + nombre;
  }

  async eliminarDocumento(id, nombre) {
    this.carga = false;
    await this.documentoService.eliminarS3(nombre);
    await this.documentoService.eliminarDocumento(id);
    this.DOCUMENTOS = await this.documentoService.obtenerDocumentos();
    this.carga = true;
  }
}
