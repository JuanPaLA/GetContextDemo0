import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginawebComponent } from './paginaweb.component';

describe('PaginawebComponent', () => {
  let component: PaginawebComponent;
  let fixture: ComponentFixture<PaginawebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginawebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginawebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
