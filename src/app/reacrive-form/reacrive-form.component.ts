import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reacrive-form',
  templateUrl: './reacrive-form.component.html',
  styleUrls: ['./reacrive-form.component.scss']
})
export class ReacriveFormComponent implements OnInit {

  customValidator(control:AbstractControl){

    if (control.value.includes('duck')){
      return {actungt: 'duck is word of Animals'}
    }
    return null
  }
  username=new FormControl('',
    [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(7),
      this.customValidator]);
  password=new FormControl('')
  myForm: FormGroup = new FormGroup({
    username: this.username,
    password: this.password
  });
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.myForm);
  }
}
