import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-cursos',
  standalone: false,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
  animations: [
    trigger('slideAnimation', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
      state('*', style({ opacity: 1, transform: 'translateX(0%)' })),
      transition(':enter', animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)')),
      transition(':leave', animate('0.6s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 0, transform: 'translateX(-100%)' })))
    ])
  ]
})
export class CursosComponent {
  courses = [
    {
      image: '/excel-curso.png',
      title: 'Curso de Excel Avançado',
      description: 'Domine ferramentas avançadas de Excel para análises e automações.',
      qualities: [
        'Fórmulas e funções complexas',
        'Tabelas dinâmicas e dashboards',
        'Macros e automação com VBA'
      ],
      syllabusUrl: '/syllabus-excel.pdf'
    },
    {
      image: '/powerbi-curso.png',
      title: 'Curso de Power BI',
      description: 'Crie dashboards interativos e transforme dados em insights.',
      qualities: [
        'Visualizações personalizadas',
        'Conexão com múltiplas fontes de dados',
        'Relatórios dinâmicos e interativos'
      ],
      syllabusUrl: '/syllabus-powerbi.pdf'
    }
  ];

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.courses.length - 1;
  }

  nextSlide() {
    this.currentIndex = this.currentIndex < this.courses.length - 1 ? this.currentIndex + 1 : 0;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  download(url: string) {
    window.open(url, '_blank'); // Abre o PDF em uma nova aba
  }
}
