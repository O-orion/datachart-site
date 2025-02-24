import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataToResultsComponent } from './data-to-results.component';

describe('DataToResultsComponent', () => {
  let component: DataToResultsComponent;
  let fixture: ComponentFixture<DataToResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataToResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataToResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
