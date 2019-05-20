import { Component, OnInit } from '@angular/core';
import { Person } from 'src/models/person';
import { ActivatedRoute } from '@angular/router';
import { PersonsService } from '../services/persons.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  person: Person;

  constructor(private route: ActivatedRoute, private personsService: PersonsService) {  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.person = this.personsService.getPersonFromId(id);
  }

}
