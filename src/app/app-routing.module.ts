import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BemVindoComponent } from './paginas/publico/bem-vindo/bem-vindo.component';


const routes: Routes = [
  {
    path:'',
    component: BemVindoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
