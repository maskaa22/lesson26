import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserResolveService} from "./servises/user-resolve.service";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component:UsersComponent, resolve:{xxx:UserResolveService}}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
