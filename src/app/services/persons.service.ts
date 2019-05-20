import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Person } from '../../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  persons: Array<Person>;

  constructor(private httpService: HttpService) {

  }

  getPersons(): void {
    this.httpService.getPersonsFromDb().subscribe(data => {
      this.persons = data;
      console.log(this.persons);
    });
  }

  getPersonFromId(id: number) {
    // this.httpService.getPersonFromDb(id).subscribe(data => {
    //   console.log(data);
    // });
  }

  deletePerson(id: number) {
    this.httpService.deletePersonFromDb(id).subscribe(data => {
      console.log(data);
    })
    console.log(this.persons);
  }

}
