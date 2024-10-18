import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  usuarios:any[]=[];
  mdl_mail: string='';
  mdl_pass: string='';
  mdl_nombre: string='';
  mdl_apellido: string='';

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  }
  async crearUsuario() {
    let data = this.api.crearUsuario (
      this.mdl_mail,
      this.mdl_pass,
      this.mdl_nombre,
      this.mdl_apellido);
  let respuesta = await lastValueFrom(data);
  let json_texto = JSON.stringify(respuesta);
  let json = JSON.parse(json_texto);
  console.log(json);
  }

}
