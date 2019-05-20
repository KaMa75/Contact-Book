import { Component, OnInit } from '@angular/core';
import { personsData } from '../../mock-data/mock-persons';
import { PersonsService } from '../services/persons.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  personsData = personsData;

  constructor(private personsService: PersonsService) {

  }

  ngOnInit() {
    this.personsService.getPersons();
  }

  addPerson() {
    console.log('add');
  }

  deletePerson() {
    console.log('delete');
  }

}
