import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-treinamentos-carrousel',
  standalone: false,
  templateUrl: './treinamentos-carrousel.component.html',
  styleUrl: './treinamentos-carrousel.component.scss',
  animations: [
    trigger('slideAnimation', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
      state('*', style({ opacity: 1, transform: 'translateX(0%)' })),
      transition(':enter', animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)')),
      transition(':leave', animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 0, transform: 'translateX(-100%)' })))
    ])
  ]
})
export class TreinamentosCarrouselComponent {
  trainings = [
    {
      image: '/equipe-data.png',
      title: 'Treinamento Power BI',
      description: 'Capacitação prática para criar dashboards interativos.'
    },
    {
      image: '/equipe-data.png',
      title: 'Treinamento Excel Avançado',
      description: 'Domine fórmulas e automações para análises poderosas.'
    },
    {
      image: '/equipe-data.png',
      title: 'Workshop de Dados',
      description: 'Estratégias para transformar dados em decisões.'
    },
    {
      image: '/equipe-data.png',
      title: 'Treinamento Power BI',
      description: 'Capacitação prática para criar dashboards interativos.'
    },
    {
      image: '/equipe-data.png',
      title: 'Treinamento Excel Avançado',
      description: 'Domine fórmulas e automações para análises poderosas.'
    },
    {
      image: '/equipe-data.png',
      title: 'Workshop de Dados',
      description: 'Estratégias para transformar dados em decisões.'
    },
    {
      image: '/equipe-data.png',
      title: 'Treinamento Power BI',
      description: 'Capacitação prática para criar dashboards interativos.'
    },
    {
      image: '/equipe-data.png',
      title: 'Treinamento Excel Avançado',
      description: 'Domine fórmulas e automações para análises poderosas.'
    },
    {
      image: '/equipe-data.png',
      title: 'Workshop de Dados',
      description: 'Estratégias para transformar dados em decisões.'
    }
  ];

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.trainings.length - 1;
  }

  nextSlide() {
    this.currentIndex = this.currentIndex < this.trainings.length - 1 ? this.currentIndex + 1 : 0;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}

