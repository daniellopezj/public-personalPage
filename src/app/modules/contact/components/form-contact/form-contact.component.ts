import { environment } from '@/environments/environment';
import { validationMessage } from '@/types/general.types';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  public formContact: FormGroup;
  public loaded = false
  public validations = [
    {
      input: 'name',
      validations: [{
        key: 'required',
        message: 'Nombre es requerido'
      }]
    },
    {
      input: 'email',
      validations: [
        {
          key: 'required',
          message: 'Email es requerido'
        },
        {
          key: 'pattern',
          message: 'Email no es valido "example@example.com"'
        },
      ]
    },
    {
      input: 'message',
      validations: [
        {
          key: 'required',
          message: 'El mensaje es requerido'
        },
        {
          key: 'minlength',
          message: 'El mensaje debe contener minimo 30 caracteres'
        },
        {
          key: 'maxlength',
          message: 'El mensaje debe contener maximo 500 caracteres'
        }
      ]
    }
  ]

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formContact = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(500)]],
    });
  }

  ngOnInit(): void {
    this.loaded = true
  }


  inputValidate(key: string): validationMessage[] {
    const listValidationes = this.validations.find(i => i.input === key)
    if (listValidationes) {
      return listValidationes.validations
    }
    return []
  }

  get form() {
    return this.formContact.controls;
  }

  sendMessage() {
    if (this.formContact.invalid) {
      this.form['name'].markAsDirty()
      this.form['email'].markAsDirty()
      this.form['message'].markAsDirty()
      return
    }
    emailjs.send(environment.serviceMailID, environment.templateMailID, this.formContact.value, environment.publicKeyMailID)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
