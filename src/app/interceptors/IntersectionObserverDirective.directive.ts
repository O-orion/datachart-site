import { Directive, ElementRef, EventEmitter, Output, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
  standalone: true
})
export class IntersectionObserverDirective implements AfterViewInit, OnDestroy {
  @Output() intersection = new EventEmitter<{ visible: boolean }>();

  private observer!: IntersectionObserver; // Usamos ! para afirmar que será atribuído

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.intersection.emit({ visible: entry.isIntersecting });
        });
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
