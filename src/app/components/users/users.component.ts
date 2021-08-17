import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUserModel} from "../../model/iUserModel";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:IUserModel[]
  constructor(private activatedRoute:ActivatedRoute) {
    // this.activatedRoute.data.subscribe(val => console.log(val.xxx))
    this.activatedRoute.data.subscribe(val => this.users=val.xxx)
  }

  ngOnInit(): void {

  }

  save() {

  }
}
