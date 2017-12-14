import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { UnactiveUsersComponent } from './unactive-users/unactive-users.component';

import {UserService} from './user.service';
import {CounterService} from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    UnactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService,
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
