import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenBindComponent } from './even-bind.component';

describe('EvenBindComponent', () => {
  let component: EvenBindComponent;
  let fixture: ComponentFixture<EvenBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
