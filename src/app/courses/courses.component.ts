import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [CourseService]
})
export class CoursesComponent {
title: string = 'Courses';
courses;

  constructor(courseService: CourseService) {
      this.courses = courseService.getCourses();
  }
}
