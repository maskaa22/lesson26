import { Component, OnInit, Output } from '@angular/core';
import {IUserModel} from "../../model/iUserModel";
import {UserService} from "../../servises/user.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 users:IUserModel[]
  user:IUserModel

  usersOption:number
  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.data.subscribe(value => this.users=value.usersResole)
  }

  ngOnInit(): void {
  }

  save(tref: HTMLFormElement):void {
    this.router.navigate(['users', this.usersOption], {state: this.user})

  }
}
