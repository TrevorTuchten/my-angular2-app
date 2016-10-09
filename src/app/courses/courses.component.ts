import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  title: string = 'Courses';
  courses: string[] = ['course1', 'course2', 'course3'];
}
