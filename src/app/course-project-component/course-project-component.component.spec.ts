import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseProjectComponentComponent } from './course-project-component.component';

describe('CourseProjectComponentComponent', () => {
  let component: CourseProjectComponentComponent;
  let fixture: ComponentFixture<CourseProjectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseProjectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseProjectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
