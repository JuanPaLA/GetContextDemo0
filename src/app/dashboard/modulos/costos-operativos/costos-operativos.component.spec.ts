import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostosOperativosComponent } from './costos-operativos.component';

describe('CostosOperativosComponent', () => {
  let component: CostosOperativosComponent;
  let fixture: ComponentFixture<CostosOperativosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostosOperativosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostosOperativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
