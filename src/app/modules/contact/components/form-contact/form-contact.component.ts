import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  public formContact: FormGroup;
  public loaded = false
  public validations = [{
    input: 'name',
    validations: [{
      key: 'required',
      message: 'esto es una prueba'
    }]
  }]

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formContact = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }


  get form() {
    return this.formContact.controls;
  }


  ngOnInit(): void {
    this.loaded = true
  }

}
