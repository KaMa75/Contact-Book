import { Component, OnInit, Inject } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { Person } from 'src/models/person';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-delete-contact',
  templateUrl: 'dialog-delete-contact.html',
})
export class DialogDeleteContact {

  constructor(public dialogRef: MatDialogRef<DialogDeleteContact>, @Inject(MAT_DIALOG_DATA) public data: Person) {
      console.log('dialog')
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// ----------------------

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  displayedColumns: Array<string> = ['nick', 'name', 'email', 'phone', 'sex', 'actions'];
  personsData: Array<Person> = [];

  constructor(private personsService: PersonsService, public dialog: MatDialog) {
    this.personsService.getPersonsObs().subscribe((data: Array<Person>) => {
      this.personsData = data;
    });
  }

  ngOnInit() {
  }

  addPerson() {
    console.log('add');
  }

  openDialog(person: Person): void {
    console.log(person);
    const dialogRef = this.dialog.open(DialogDeleteContact, {
      width: '250px',
      // data: person
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });

    // dialogRef.close('Zamykanie');
  }

}


