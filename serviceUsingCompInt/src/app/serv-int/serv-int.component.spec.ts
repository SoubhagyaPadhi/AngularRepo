import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServIntComponent } from './serv-int.component';

describe('ServIntComponent', () => {
  let component: ServIntComponent;
  let fixture: ComponentFixture<ServIntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServIntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
