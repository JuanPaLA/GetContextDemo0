import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoLineChartComponent } from './co-line-chart.component';

describe('CoLineChartComponent', () => {
  let component: CoLineChartComponent;
  let fixture: ComponentFixture<CoLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
