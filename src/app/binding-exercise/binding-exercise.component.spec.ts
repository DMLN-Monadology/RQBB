import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingExerciseComponent } from './binding-exercise.component';

describe('BindingExerciseComponent', () => {
  let component: BindingExerciseComponent;
  let fixture: ComponentFixture<BindingExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
