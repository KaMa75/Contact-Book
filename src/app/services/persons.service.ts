import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Person } from '../../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  persons: Array<Person> = [];

  personsObs = new BehaviorSubject<Array<Person>>([]);

  constructor(private httpService: HttpService) {

  }

  getPersons() {
    this.httpService.getPersonsFromDb().subscribe(data => {
      this.persons = data;
      this.personsObs.next(this.persons);
    });
  }

  getPersonFromId(id: number) {

  }

  deletePerson(personToDelete: Person) {
    this.httpService.deletePersonFromDb(personToDelete.id).subscribe(data => {
      this.persons = this.persons.filter((person: Person) => person !== personToDelete);
      this.personsObs.next(this.persons);
    });

  }

  getPersonsObs(): Observable<Array<Person>> {
    this.getPersons();
    return this.personsObs.asObservable();
  }
}
