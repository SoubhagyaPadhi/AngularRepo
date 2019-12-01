import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropCompComponent } from './prop-comp.component';

describe('PropCompComponent', () => {
  let component: PropCompComponent;
  let fixture: ComponentFixture<PropCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
