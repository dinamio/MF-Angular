import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription }   from 'rxjs/Subscription';


import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './ActiveUser/ActiveUser.component';
import { UnactiveUsersComponent } from './UnactiveUser/UnactiveUser.component';

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
