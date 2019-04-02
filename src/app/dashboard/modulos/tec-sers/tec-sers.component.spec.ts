import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecSersComponent } from './tec-sers.component';

describe('TecSersComponent', () => {
  let component: TecSersComponent;
  let fixture: ComponentFixture<TecSersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecSersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecSersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
