import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponentComponent } from './course-component.component';

describe('CourseComponentComponent', () => {
  let component: CourseComponentComponent;
  let fixture: ComponentFixture<CourseComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponentComponent]
    });
    fixture = TestBed.createComponent(CourseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
