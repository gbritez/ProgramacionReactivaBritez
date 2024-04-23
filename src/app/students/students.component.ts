import { Component } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Student } from '../models/student';
import { Observable, Subject, delay, map, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students$!: Observable<Array<string>>;

  constructor(
    public studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.students$ = this.studentsService.getStudents()
      .pipe(
        map(students => students.map(student => `${student.first_name} ${student.last_name}`)),
      )
  }
}
