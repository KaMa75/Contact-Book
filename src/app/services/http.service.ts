import { Injectable } from '@angular/core';
import { dbUrl, apiKey, corsApiKey } from '../../config/configData';
import { Person } from '../../models/person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  dbUrl: string = dbUrl;

  headers = new HttpHeaders({
    'x-apikey': corsApiKey
  });

  constructor(private http: HttpClient) {
  }

  getPersonsFromDb(): Observable<Array<Person>> {
    return this.http.get<Array<Person>>(this.dbUrl, {'headers': this.headers});
  }

  addPersonToDb(person: Person): Observable<Person> {
    return this.http.post<Person>(this.dbUrl, person, {'headers': this.headers});
  }

  updatePersonInDb(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.dbUrl}/${person._id}`, person, {'headers': this.headers});
  }

  deletePersonFromDb(id: string): Observable<Person> {
    return this.http.delete<Person>(`${this.dbUrl}/${id}`, {'headers': this.headers});
  }

}
