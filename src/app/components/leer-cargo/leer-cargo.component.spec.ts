import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerCargoComponent } from './leer-cargo.component';

describe('LeerCargoComponent', () => {
  let component: LeerCargoComponent;
  let fixture: ComponentFixture<LeerCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeerCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
