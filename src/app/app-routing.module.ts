import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BemVindoComponent } from './paginas/publico/bem-vindo/bem-vindo.component';
import { LoginComponent } from './paginas/publico/login/login.component';
import { CadastroComponent } from './paginas/publico/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: BemVindoComponent
  },
  {  
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: '**', redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
