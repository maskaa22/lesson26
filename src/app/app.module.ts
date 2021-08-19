import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserResolveService} from "./servises/user-resolve.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserComponent } from './components/user/user.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import {UserIdResolveService} from "./servises/user-id-resolve.service";
import { PostOfUserComponent } from './components/post-of-user/post-of-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FormComponent,
    ReactiveFormComponent,
    PostOfUserComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'users', component: UsersComponent, resolve:{usersResole:UserResolveService}},
      {path: 'users/:id', component:UserComponent, resolve:{userResole:UserIdResolveService}},
      {path: 'users/:id/posts', component:PostOfUserComponent, resolve:{postsResole:UserIdResolveService}}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
