import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserService} from "./services/user.service";
import {CounterService} from "./services/counter.service";
import {UnactiveUsersComponent} from "./unactive.user/unactive.users.component";
import {ActiveUsersComponent} from "./active.users/active.users.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    UnactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CounterService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
