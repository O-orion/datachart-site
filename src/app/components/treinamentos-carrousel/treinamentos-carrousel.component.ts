import { Component } from '@angular/core';

@Component({
  selector: 'app-treinamentos-carrousel',
  standalone: false,
  templateUrl: './treinamentos-carrousel.component.html',
  styleUrl: './treinamentos-carrousel.component.scss'
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
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.trainings.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.trainings.length - 1) ? this.currentIndex + 1 : 0;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}

