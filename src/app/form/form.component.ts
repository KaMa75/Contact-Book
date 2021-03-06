import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/models/person';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  initFormData = {nick: null, firstName: null, lastName: null, email: null, phone: null, sex: null};

  @Output()
  dataToSaveInDb = new EventEmitter<Person>();

  @Output()
  closeForm = new EventEmitter<Person>();

  newPersonData: Person;
  personForm: FormGroup;

  sexOptions = [null, 'Mężczyzna', 'Kobieta'];

  constructor() {}

  ngOnInit() {
    this.personForm = new FormGroup({
      nick: new FormControl(this.initFormData.nick, [Validators.required, Validators.maxLength(24)]),
      firstName: new FormControl(this.initFormData.firstName, [Validators.required, Validators.maxLength(24)]),
      lastName: new FormControl(this.initFormData.lastName, [Validators.required, Validators.maxLength(24)]),
      email: new FormControl(this.initFormData.email, [Validators.required, Validators.maxLength(32), Validators.email]),
      phone: new FormControl(this.initFormData.phone, [Validators.required, Validators.maxLength(12)]),
      sex: new FormControl(this.initFormData.sex, Validators.required)
    });
  }

  onSubmit() {
    this.newPersonData = {
      nick: this.personForm.value.nick,
      firstName: this.personForm.value.firstName,
      lastName: this.personForm.value.lastName,
      email: this.personForm.value.email,
      phone: this.personForm.value.phone,
      sex: this.personForm.value.sex
    };
    this.onReset();
    this.dataToSaveInDb.emit(this.newPersonData);
  }

  onClose() {
    this.closeForm.emit();
  }

  onReset() {
    this.personForm.reset();
  }

}
