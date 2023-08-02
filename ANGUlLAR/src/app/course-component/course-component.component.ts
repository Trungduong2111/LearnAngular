import { Component } from "@angular/core";
import { CoursesService } from "./course.service";
// import { CoursesService } from "./course.service";


@Component({
  selector: 'courses',
  template: `<h2>{{title}}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>`
})
export class CourseComponentComponent {
  title = "List of courses"
  courses;
  // courses = ["course1", "course2", "course3"]
  constructor() {
    // constructor(service: CoursesService) {
    let service = new CoursesService();
    this.courses = service.getCourses();
  }
}