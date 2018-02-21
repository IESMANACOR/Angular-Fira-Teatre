import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallEspectacleComponent } from './detall-espectacle.component';

describe('DetallEspectacleComponent', () => {
  let component: DetallEspectacleComponent;
  let fixture: ComponentFixture<DetallEspectacleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallEspectacleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallEspectacleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
