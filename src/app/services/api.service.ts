import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://programadormaldito.cl';//el nombre url puede ser cualquiera

  constructor(private http: HttpClient) { }

  crearUsuario(correo: string, contrasena: string, nombre: string, apellido: string){
  
    let usuario: any = {};
    usuario.mail = correo;
    usuario.pass = contrasena;
    usuario.nombre = nombre;
    usuario.apellido = apellido;

    //api con peticion tipo post
    return this.http.post(this.url + '/route/usuario_duoc_almacenar', usuario).pipe();
    
  }


}
