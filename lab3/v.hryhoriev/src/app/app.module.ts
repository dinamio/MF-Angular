import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookComponent } from './book/book.component';

import { UserService } from './services/user/user.service';
import { CounterService } from './services/counter/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
