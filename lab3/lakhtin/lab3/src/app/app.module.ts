import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { UnactiveUsersComponent } from './unactive-users/unactive-users.component';
import { UserServiceService } from 'app/user-service.service';
import { CounterServiceService } from 'app/counter-service.service';

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
    UserServiceService,
    CounterServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
