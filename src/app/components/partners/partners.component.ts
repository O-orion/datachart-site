import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: false,
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  partners = [
    { name: 'Empresa A', logo: '/equipe-data.png' },
    { name: 'Empresa B', logo: '/equipe-data.png' },
    { name: 'Empresa C', logo: '/equipe-data.png' },
    { name: 'Empresa D', logo: '/equipe-data.png' },
    { name: 'Empresa E', logo: '/equipe-data.png' },
    { name: 'Empresa F', logo: '/equipe-data.png' }
  ];
}
