import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependienteComponent } from './dependiente.component';

describe('DependienteComponent', () => {
  let component: DependienteComponent;
  let fixture: ComponentFixture<DependienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
