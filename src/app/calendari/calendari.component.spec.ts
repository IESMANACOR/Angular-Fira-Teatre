import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendariComponent } from './calendari.component';

describe('CalendariComponent', () => {
  let component: CalendariComponent;
  let fixture: ComponentFixture<CalendariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
