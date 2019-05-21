import { Person } from './../../models/person';
import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private personsService: PersonsService) { }

  ngOnInit() {
  }

  saveInDb(person: Person): void {
    this.personsService.addPerson(person);
  }

}
