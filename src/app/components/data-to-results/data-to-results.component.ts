import { Component } from '@angular/core';

@Component({
  selector: 'app-data-to-results',
  standalone: false,
  templateUrl: './data-to-results.component.html',
  styleUrl: './data-to-results.component.scss'
})
export class DataToResultsComponent {
  steps = [
    {
      icon: '/coleta.png',
      title: 'Coleta de Dados',
      description: 'Extraímos e organizamos dados brutos de forma eficiente.'
    },
    {
      icon: '/analise.png',
      title: 'Análise Profunda',
      description: 'Transformamos números em insights claros com expertise.'
    },
    {
      icon: '/estrategia.png',
      title: 'Resultados Estratégicos',
      description: 'Entregamos soluções que impulsionam seu sucesso.'
    }
  ];
}
