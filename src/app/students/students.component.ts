import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Student } from '../models/student';
import { Observable, Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject<boolean>();
  students$!: Observable<string[]>;
  constructor(
    public studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.students$ = this.studentsService.getStudents()
      .pipe(
        takeUntil(this.onDestroy$),
        map(students => {
          return students.map(x => x.first_name)
        }),
      )
  }

  ngOnDestroy(): void {
    console.log('componente destruido')
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

}
