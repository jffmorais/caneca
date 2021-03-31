import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  //mostrarNavEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.apelido === 'admin' && usuario.senha === '123456'){
      this.usuarioAutenticado = true;
      //this.mostrarNavEmmiter.emit(true);
      this.router.navigate(['/admin/main']);
    } else {
      console.log('Usuario nao encontrado');
      //this.mostrarNavEmmiter.emit(false);
      this.usuarioAutenticado = false;
    }
  }
}
