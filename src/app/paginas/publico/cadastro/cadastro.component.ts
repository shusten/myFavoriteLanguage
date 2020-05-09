import { Component } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  public usuario: Usuario = <Usuario>{};
  public termoUsuario = false;

  constructor(
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  onSubmit() {
    
  }

}
