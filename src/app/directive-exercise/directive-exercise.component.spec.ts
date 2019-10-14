import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExerciseComponent } from './directive-exercise.component';

describe('DirectiveExerciseComponent', () => {
  let component: DirectiveExerciseComponent;
  let fixture: ComponentFixture<DirectiveExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
