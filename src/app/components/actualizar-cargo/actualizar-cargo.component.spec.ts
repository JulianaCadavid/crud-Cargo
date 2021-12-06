import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCargoComponent } from './actualizar-cargo.component';

describe('ActualizarCargoComponent', () => {
  let component: ActualizarCargoComponent;
  let fixture: ComponentFixture<ActualizarCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
