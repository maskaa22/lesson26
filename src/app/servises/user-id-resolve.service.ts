import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUserModel} from "../model/iUserModel";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserIdResolveService implements Resolve<IUserModel>{

  constructor(private userService:UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUserModel> | Promise<IUserModel> | IUserModel {
    return this.userService.getById(route.params.id);
  }
}
