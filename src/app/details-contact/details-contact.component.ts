import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/models/person';
import { PersonsService } from '../services/persons.service';

@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.component.html',
  styleUrls: ['./details-contact.component.css']
})
export class DetailsContactComponent implements OnInit {

  public person: Person;

  constructor(private route: ActivatedRoute, private router: Router, private personsService: PersonsService) {  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.person = this.personsService.getPersonFromId(id);
    if (!this.person) {
      this.router.navigate(['']);
    }
  }

}
