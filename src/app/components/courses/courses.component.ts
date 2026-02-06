import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COURSES, Course } from '../../mock-courses';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = COURSES;
  @Output() openRegistration = new EventEmitter<Course>();

  enroll(course: Course) {
    this.openRegistration.emit(course);
  }
}
