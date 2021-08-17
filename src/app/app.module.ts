import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserResolveService} from "./servises/user-resolve.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'users', component: UsersComponent, resolve: {xxx: UserResolveService}},
      {path: 'users/:id', component:UserComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
