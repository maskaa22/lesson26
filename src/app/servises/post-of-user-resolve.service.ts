import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IPostModel} from "../model/iPostModel";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class PostOfUserResolveService implements Resolve<IPostModel[]>{

  constructor(private userService:UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPostModel[]> | Promise<IPostModel[]> | IPostModel[] {
    return this.userService.getPostsOfUser(route.params.id);
  }

}
