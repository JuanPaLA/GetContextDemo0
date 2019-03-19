import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoBarChartComponent } from './co-bar-chart.component';

describe('CoBarChartComponent', () => {
  let component: CoBarChartComponent;
  let fixture: ComponentFixture<CoBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
