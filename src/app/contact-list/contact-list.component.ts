import { Component, OnInit } from '@angular/core';
import { personsData } from '../../mock-data/mock-persons';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  personsData = personsData;

  constructor() {
    console.log(personsData);
  }

  ngOnInit() {
  }

  addPerson() {
    console.log('add');
  }

  deletePerson() {
    console.log('delete');
  }

}
