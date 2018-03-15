import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasUsuariComponent } from './compras-usuari.component';

describe('ComprasUsuariComponent', () => {
  let component: ComprasUsuariComponent;
  let fixture: ComponentFixture<ComprasUsuariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasUsuariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
