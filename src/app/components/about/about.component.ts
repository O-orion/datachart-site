import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('fadeIn', [
      state('hiddden', style({
        opacity: 0,
        transform: 'translateY(30px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', [
        animate('1.2s ease-out')
      ])
    ])
  ]
})
export class AboutComponent {
  aboutImage = '/equipe-data.png';
  animationState = 'hidden';

  aboutData = {
    title: 'Quem Somos',
    description:  'A Datachart é uma empresa especializada em transformar dados em soluções estratégicas. Com anos de experiência, oferecemos consultoria personalizada e treinamentos avançados em Power BI e Excel, ajudando negócios a crescerem com inteligência de dados.',
    values: [
      'Paixão por dados e inovação',
      'Compromisso com resultados reais',
      'Excelência em treinamento e suporte'
    ]
  };

  onIntersection({ visible }: { visible: boolean}) {
    if (visible) {
      this.animationState = 'visible';
    }
  }

}
