import {Component, Input, OnInit} from '@angular/core';
import {IPostModel} from "../../model/iPostModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-of-user',
  templateUrl: './post-of-user.component.html',
  styleUrls: ['./post-of-user.component.scss']
})
export class PostOfUserComponent implements OnInit {
  @Input()
  posts:IPostModel[]
  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.data.subscribe(value =>
      this.posts=value.postsResole
    )
  }

  ngOnInit(): void {
  }

}
