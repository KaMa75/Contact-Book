import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { DeleteDialogComponent } from '../contact-list/delete-dialog/delete-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DelDialogService {

  constructor(private dialog: MatDialog) { }

  openDelDialog(name: string) {
    return this.dialog.open(DeleteDialogComponent, {
      width: '350px',
      data: {
        name
      }
    });
  }
}
