import { Component, OnInit, Output } from '@angular/core';
import {IUserModel} from "../../model/iUserModel";
import {UserService} from "../../servises/user.service";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  users:IUserModel[]
  user:IUserModel
  usersOption:number
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users=value)
  }

  save(tref: HTMLFormElement):void {
    this.userService.getById(this.usersOption).subscribe(value => {
      this.user = value
    })
  }
}
