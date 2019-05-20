import { Component } from '@angular/core';
import { PersonsService } from './services/persons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private personsService: PersonsService) {
    console.log('inject persons service');
  }

}
