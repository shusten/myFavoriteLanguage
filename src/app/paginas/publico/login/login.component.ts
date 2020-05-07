import { Component } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  public usuario: Usuario = <Usuario> {};

  constructor() { }

  onSubmit() {

  }
}
