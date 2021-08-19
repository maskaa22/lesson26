import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserModel} from "../model/iUserModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IUserModel[]>{
    return this.httpClient.get<IUserModel[]>('https://jsonplaceholder.typicode.com/users')
  }
  getById(id:number):Observable<IUserModel>{
    return this.httpClient.get<IUserModel>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

}
