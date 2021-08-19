import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IUserModel} from "../../model/iUserModel";
import {UserService} from "../../servises/user.service";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form:FormGroup
  users:IUserModel[]
  @Output()
  event= new EventEmitter<number>()
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      userId: new FormControl('')
    })
    this.userService.getAll().subscribe(value => this.users=value)
  }


  getUserId():void {

    this.event.emit(this.form.controls.userId.value)
  }

}
