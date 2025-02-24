import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element =  document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block:"start" })
    }
  }
}
