import { Linguagem } from 'src/app/interfaces/linguagem';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-bar-linguagens',
  templateUrl: './card-bar-linguagens.component.html',
  styleUrls: ['./card-bar-linguagens.component.css']
})
export class CardBarLinguagensComponent {
  public nomesLinguagens: string[];
  public curtidasLinguagens: number[];
  public tipoGrafico = 'bar';
  alert: any;

  @Input() set linguagens(linguagens: Linguagem[]) {
    if (linguagens) {
      this.nomesLinguagens = linguagens.map(linguagem => {
        return linguagem.nome;
      });
      this.curtidasLinguagens = linguagens.map(linguagem => {
        return linguagem.numeroUsuarios;
      });
    }
  }
}
