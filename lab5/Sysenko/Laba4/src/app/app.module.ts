import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddBookComponent } from './Add/Add.component';
import { AllBooksComponent } from './All/All.component';
import { BookComponent } from './Book/Book.component';

import { AppRoutingModule } from './app-routing.module';

import { LibraryService } from './library.service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    AllBooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LibraryService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
