import { Person } from './../../models/person';
import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private personsService: PersonsService, public dialogRef: MatDialogRef<AddContactComponent>) { }

  ngOnInit() {
  }

  saveInDb(person: Person): void {
    this.dialogRef.close(true);
    this.personsService.addPerson(person);
  }

  closeForm() {
    this.dialogRef.close(false);
  }

}
