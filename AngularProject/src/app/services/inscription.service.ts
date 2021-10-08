import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) { }

  getSudents(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/student');
  }
  postSudents(credentials: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/student', credentials);
  }
  postTeacher(credentials: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/teacher', credentials);
  }
}
