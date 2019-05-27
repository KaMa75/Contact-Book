import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Person } from '../../models/person';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  persons: Array<Person> = [];

  personsObs = new BehaviorSubject<Array<Person>>([]);

  constructor(private httpService: HttpService, private router: Router, public toastr: ToastrService) {
    this.getPersons(true);
  }

  getPersons(firstLoad: boolean): void {
    this.httpService.getPersonsFromDb().subscribe(
      data => {
        this.persons = data;
        this.personsObs.next(this.persons);
        this.toastr.success(`Pobrano ${firstLoad ? '' : 'zaktualizowaną '}listę kontaktów`);
      },
      err => {
        this.toastr.error(`Nie udało się pobrać ${firstLoad ? '' : 'zaktualizowanej '}listy kontaktów. Spróbuj ponownie później.`);
      }
    );
  }

  getPersonFromId(id: string): Person {
    const personArr = this.persons.filter(person => person.id === parseInt(id, 10));
    return personArr[0];
  }

  deletePerson(personToDelete: Person): void {
    this.httpService.deletePersonFromDb(personToDelete.id).subscribe(
      resp => {
        this.persons = this.persons.filter((person: Person) => person !== personToDelete);
        this.personsObs.next(this.persons);
        this.toastr.success(`${personToDelete.firstName} ${personToDelete.lastName} został usunięty z listy kontaktów`);
      },
      err => {
        this.toastr.error(`Nie udało się usunąć kontaktu. Spróbuj ponownie później`);
      }
    );
  }

  updatePerson(personToUpdate: Person): void {
    this.router.navigate(['']);
    this.httpService.updatePersonInDb(personToUpdate).subscribe(
      resp => {
        const index = this.findPersonInArray(resp.id);
        this.persons[index] = resp;
        this.personsObs.next([...this.persons]);
        this.toastr.success(`Kontakt ${personToUpdate.firstName} ${personToUpdate.lastName} został poprawnie zaktualizowany`);
      },
      err => {
        this.toastr.error(`Nie udało się zaktualizować kontaktu. Spróbuj ponownie później`);
      }
    );
  }

  findPersonInArray(id: number): number {
    return this.persons.indexOf(this.persons.filter((person: Person) => person.id === id)[0]);
  }

  addPerson(personToAdd: Person): void {
    this.router.navigate(['']);
    this.httpService.addPersonToDb(personToAdd).subscribe(
      resp => {
        this.getPersons(false);
        this.toastr.success(`Dodano kontakt ${personToAdd.firstName} ${personToAdd.lastName}.`);
      },
      err => {
        this.toastr.error(`Nie udało się dodać kontaktu. Spróbuj ponownie później`);
      }
    );
  }

  getPersonsObs(): Observable<Array<Person>> {
    return this.personsObs.asObservable();
  }

}
