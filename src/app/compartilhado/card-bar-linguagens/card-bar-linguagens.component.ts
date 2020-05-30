import { Linguagem } from 'src/app/interfaces/linguagem';
import { Component, Input, OnInit} from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, Chart } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-card-bar-linguagens',
  templateUrl: './card-bar-linguagens.component.html',
  styleUrls: ['./card-bar-linguagens.component.css']
})
export class CardBarLinguagensComponent implements OnInit {
  public nomesLinguagens: string[];
  public curtidasLinguagens: number[];
  public chartType = 'bar';
  
  barChartLabels: Label[] = ['C#', 'Delphi', 'Java', 'JavaScript', 'PHP', 'Python','Ruby','TypeScript'];
 

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  public barChartColors: any [] =[
    {
        backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
      ],
        borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2 
            }
]

  constructor() { } 


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

  ngOnInit() {
   
}


}