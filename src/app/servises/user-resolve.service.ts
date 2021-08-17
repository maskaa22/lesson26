import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUserModel} from "../model/iUserModel";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUserModel>{

  constructor(private userService:UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
     return this.userService.getUsers();
    // return new Promise((resolve1, reject) => {
    //   setTimeout(()=>{
    //     resolve1(this.userService.getUsers())
    //   }, 3000)
    // })
  }

}
