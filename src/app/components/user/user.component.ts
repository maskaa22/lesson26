import {Component, Input, OnInit} from '@angular/core';
import {IUserModel} from "../../model/iUserModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user:IUserModel
  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.data.subscribe(value => this.user=value.userResole)
  }

  ngOnInit(): void {
  }

  show() {
     this.router.navigate(['users/', this.user.id, 'posts'], {state: this.user})
  }
}
