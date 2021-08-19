import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUserModel} from "../../model/iUserModel";
import {UserService} from "../../servises/user.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user:IUserModel
  users:IUserModel[]
  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) {
    // this.activatedRoute.data.subscribe(val => this.users=val.xxx);
    //this.activatedRoute.data.subscribe(val => console.log(val));
  }

  ngOnInit(): void {

  }


  // save(tref: HTMLFormElement) {
  //   console.log(this.users);
  // }
  getId(id: number) {
    this.userService.getById(id).subscribe(value => {

      this.user = value

    })
  }
}
