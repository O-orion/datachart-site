import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinamentosCarrouselComponent } from './treinamentos-carrousel.component';

describe('TreinamentosCarrouselComponent', () => {
  let component: TreinamentosCarrouselComponent;
  let fixture: ComponentFixture<TreinamentosCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreinamentosCarrouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinamentosCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
