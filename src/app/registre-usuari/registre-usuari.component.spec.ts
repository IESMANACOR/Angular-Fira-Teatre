import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreUsuariComponent } from './registre-usuari.component';

describe('RegistreUsuariComponent', () => {
  let component: RegistreUsuariComponent;
  let fixture: ComponentFixture<RegistreUsuariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreUsuariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreUsuariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
