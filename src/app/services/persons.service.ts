import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Person } from '../../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  persons: Array<Person>;

  constructor(private httpService: HttpService) {  }

  getPersons(): Array<Person> {
    this.httpService.getPersonsFromDb().subscribe(data => {
      this.persons = data;
    });
    console.log(this.persons);
  }
}
