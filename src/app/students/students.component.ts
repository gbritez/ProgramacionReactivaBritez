import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Student } from '../models/student';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject<void>();
  students$!: Observable<string[]>;

  constructor(
    public studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.students$ = this.studentsService.getStudents().pipe(
      takeUntil(this.onDestroy$),
      map(students => students.map(student => `${student.first_name} ${student.last_name}`)),
    );
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
