import { Component } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  public usuario: Usuario = <Usuario>{};
  public termoUsuario = false;

  constructor() { }

  onSubmit() {
    
  }

}
