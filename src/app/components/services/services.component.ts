import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      icon: '/powerbi.png',
      title: 'Power BI Pro',
      description: 'Crie dashboards incríveis e transforme dados em decisões estratégicas.'
    },
    {
      icon: '/excel.png',
      title: 'Excel Avançado',
      description: 'Automatize processos e domine análises complexas com Excel.'
    },
    {
      icon: '/data.png',
      title: 'Consultoria de Dados',
      description: 'Soluções personalizadas para o seu negócio crescer com dados.'
    }
  ];
}
