import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  TAMANO : any = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openMediumModal(mediumModalContent) {
    this.modalService.open(mediumModalContent);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    const reader = new FileReader();

    this.NOMBRE_ARCHIVO = this.fileToUpload.name
    this.TAMANO = this.fileToUpload.size

    console.log(files);
    reader.readAsDataURL(this.fileToUpload);
    reader.onload = () => {
      const base64str = reader.result.toString();
      this.base64Final = base64str.split("base64,")[1];
      console.log(this.base64Final);
    };
  }

  registrarDocumento() {
    if (this.TAMANO > 0) {

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
}
