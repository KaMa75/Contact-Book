import { Injectable } from '@angular/core';
import { dbUrl } from '../../config/configData';
import { Person } from '../../models/person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  dbUrl: string = dbUrl;

  constructor(private http: HttpClient) {
    console.log(this.dbUrl);
  }

  getPersonsFromDb(): Observable<Array<Person>> {
    return this.http.get<Array<Person>>(this.dbUrl);
  }

  addPersonToDb(person: Person): Observable<Person> {
    return this.http.post<Person>(this.dbUrl, person);
  }

  updatePersonInDb(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.dbUrl}/${person.id.toString()}`, person);
  }

  deletePersonFromDb(id: number): Observable<Person> {
    return this.http.delete<Person>(`${this.dbUrl}/${id.toString()}`);
  }

}
