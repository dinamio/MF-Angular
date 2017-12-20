import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddBookComp } from './add-book/add-book.component';
import { ShowBooksComp } from './show-books/show-books.component';
import { CurrentBookComp } from './current-book/current-book.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { LibraryService } from './library.service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComp,
    ShowBooksComp,
    CurrentBookComp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    LibraryService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
