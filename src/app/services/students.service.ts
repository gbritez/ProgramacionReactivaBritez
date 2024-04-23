import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student';
import { STUDENTS } from '../mocks/students.mock';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getStudents(): Observable<Array<Student>> {

    const students = STUDENTS;

    return of(students);
  }
}
