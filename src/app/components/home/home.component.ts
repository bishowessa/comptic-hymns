import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { CoursesComponent } from '../courses/courses.component';
import { RegistrationModalComponent } from '../registration-modal/registration-modal.component';
import { Course } from '../../mock-courses';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    AboutComponent, 
    CoursesComponent, 
    RegistrationModalComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isModalOpen = false;
  selectedCourse: Course | null = null;

  openRegistration(course: Course) {
    this.selectedCourse = course;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedCourse = null;
  }
}
