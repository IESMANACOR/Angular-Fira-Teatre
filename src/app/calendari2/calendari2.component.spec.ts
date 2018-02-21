import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendari2Component } from './calendari2.component';

describe('Calendari2Component', () => {
  let component: Calendari2Component;
  let fixture: ComponentFixture<Calendari2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calendari2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calendari2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
