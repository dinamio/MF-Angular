import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { ChosenBookComponent } from './chosen-book/chosen-book.component';

import { AppRoutingModule } from './/app-routing.module';

import { LibraryService } from './library.service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    AllBooksComponent,
    ChosenBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LibraryService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
