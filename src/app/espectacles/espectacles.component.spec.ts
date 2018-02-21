import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectaclesComponent } from './espectacles.component';

describe('EspectaclesComponent', () => {
  let component: EspectaclesComponent;
  let fixture: ComponentFixture<EspectaclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspectaclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspectaclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
