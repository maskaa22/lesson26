import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TdFormComponent } from './td-form/td-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReacriveFormComponent } from './reacrive-form/reacrive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    ReacriveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
