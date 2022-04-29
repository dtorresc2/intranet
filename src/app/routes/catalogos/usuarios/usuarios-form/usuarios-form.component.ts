import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DateService } from 'src/app/service/date/date.service';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent implements OnInit {
  modoEdicion: boolean = false;
  ID_USUARIO: any = 0;

  formGroup: FormGroup;

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private dateService: DateService
  ) {
    this.formGroup = new FormGroup({
      primer_nombre: new FormControl('', [Validators.required]),
      segundo_nombre: new FormControl('', [Validators.required]),
      primer_apellido: new FormControl('', [Validators.required]),
      segundo_apellido: new FormControl('', [Validators.required]),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      rol: new FormControl('', [Validators.required]),
      dpi: new FormControl('', [Validators.required, Validators.pattern('^[0-9][0-9]*$')]),
      correo_electronico: new FormControl('', [Validators.required]),
      estado: new FormControl('')
    });
  }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.modoEdicion = true;
      this.ID_USUARIO = params.id;
    }
    else {
      this.modoEdicion = false;
      this.formGroup.get('fecha_nacimiento').setValue(this.dateService.obtenerFechaActualMYSQL());
      this.formGroup.get('estado').setValue(true);
    }

    // console.log(this.dateService.obtenerFechaActualMYSQL());
  }

  async registrar() {
    if (!this.formGroup.invalid) {
      if(!this.modoEdicion){
        let respuesta = await this.usuarioService.registrarUsuario(
          this.formGroup.get('dpi').value,
          this.formGroup.get('primer_nombre').value,
          this.formGroup.get('segundo_nombre').value,
          this.formGroup.get('primer_apellido').value,
          this.formGroup.get('segundo_apellido').value,
          this.formGroup.get('estado').value,
          this.formGroup.get('rol').value,
          this.formGroup.get('fecha_nacimiento').value,
          this.formGroup.get('correo_electronico').value
        );

        console.log(respuesta);

        Swal.fire({
          title: 'Usuarios',
          text: 'Usuario registrado correctamente',
          icon: 'success',
          confirmButtonText: 'OK',
          // confirmButtonColor: '#2a3848',
          showCloseButton: true
        });
        this.router.navigate(['catalogos/usuarios']);
      }
    }
  }
}
