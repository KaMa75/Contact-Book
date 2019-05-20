import { Injectable } from '@angular/core';
import { dbUrl } from '../../config/configData';
import { Person } from '../../models/person';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  dbUrl: string = dbUrl;

  constructor(private http: HttpClient) {
    console.log(this.dbUrl);
  }

  getPersonsFromDb(): Observable<Array<Person>> {
    return this.http.get(dbUrl);
  }

}
