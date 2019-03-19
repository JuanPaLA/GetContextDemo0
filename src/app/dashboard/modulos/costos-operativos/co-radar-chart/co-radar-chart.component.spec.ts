import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRadarChartComponent } from './co-radar-chart.component';

describe('CoRadarChartComponent', () => {
  let component: CoRadarChartComponent;
  let fixture: ComponentFixture<CoRadarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRadarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
