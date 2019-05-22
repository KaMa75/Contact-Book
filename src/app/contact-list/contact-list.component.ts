import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { Person } from 'src/models/person';
import { DelDialogService } from '../services/del-dialog.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  displayedColumns: Array<string> = ['nick', 'name', 'email', 'phone', 'sex', 'actions'];
  personsData: Array<Person> = [];

  constructor(private personsService: PersonsService, private delService: DelDialogService) {
    this.personsService.getPersonsObs().subscribe((data: Array<Person>) => {
      this.personsData = data;
    });
  }

  ngOnInit() {
  }

  addPerson() {
    console.log('add');
  }

  openDialog(person: Person) {
    const name = `${person.firstName} ${person.lastName}`;
    this.delService.openDelDialog(name).afterClosed().subscribe(response => {
      if(response) {
        this.personsService.deletePerson(person);
      }
    });
  }
}
