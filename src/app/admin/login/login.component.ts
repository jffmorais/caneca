import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {

  }

  logar(){
    this.authServ.fazerLogin(this.usuario);
  }

}
