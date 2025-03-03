import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinidashboardComponent } from './minidashboard.component';

describe('MinidashboardComponent', () => {
  let component: MinidashboardComponent;
  let fixture: ComponentFixture<MinidashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinidashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinidashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
