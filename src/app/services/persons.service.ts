import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Person } from '../../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private persons = new BehaviorSubject<Array<Person>>([]);

  constructor(private httpService: HttpService) {

  }

  getPersons(): Observable<Array<Person>> {
    this.httpService.getPersonsFromDb().subscribe(data => {
      this.persons.next(data);
    });
    return this.persons.asObservable();
  }

  getPersonFromId(id: number) {

  }

  deletePerson(id: number) {
    this.httpService.deletePersonFromDb(id).subscribe(data => {
      console.log(data);
    })
    console.log(this.persons);
  }

}
