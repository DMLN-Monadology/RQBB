import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GDbHomeComponent } from './g-db-home.component';

describe('GDbHomeComponent', () => {
  let component: GDbHomeComponent;
  let fixture: ComponentFixture<GDbHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GDbHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GDbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
