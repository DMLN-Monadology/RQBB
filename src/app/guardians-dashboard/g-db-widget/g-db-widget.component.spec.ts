import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GDbWidgetComponent } from './g-db-widget.component';

describe('GDbWidgetComponent', () => {
  let component: GDbWidgetComponent;
  let fixture: ComponentFixture<GDbWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GDbWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GDbWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
