import { Component, OnInit } from '@angular/core';
import { PersonsService } from './services/persons.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private personsService: PersonsService, public toastr: ToastrService) {

  }

  ngOnInit() {
    this.showSuccess();
  }

  showSuccess() {

    this.toastr.error('Toastr fun!');
  }

}
