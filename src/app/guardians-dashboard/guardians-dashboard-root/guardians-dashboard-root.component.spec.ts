import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiansDashboardRootComponent } from './guardians-dashboard-root.component';

describe('GuardiansDashboardRootComponent', () => {
  let component: GuardiansDashboardRootComponent;
  let fixture: ComponentFixture<GuardiansDashboardRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardiansDashboardRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardiansDashboardRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
