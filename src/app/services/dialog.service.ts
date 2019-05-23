import { AddContactComponent } from './../add-contact/add-contact.component';
import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { DeleteDialogComponent } from '../contact-list/delete-dialog/delete-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openAddDialog() {
    this.dialog.open(AddContactComponent, {
      width: '90%'
    });
  }

  openDelDialog(name: string) {
    return this.dialog.open(DeleteDialogComponent, {
      width: '350px',
      data: {
        name
      }
    });
  }
}
