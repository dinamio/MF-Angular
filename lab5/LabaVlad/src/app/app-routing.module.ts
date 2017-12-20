import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from 'app/all-books/all-books.component';
import { BookComponent } from 'app/book/book.component';
import { AddBookComponent } from 'app/add-book/add-book.component';

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: AllBooksComponent},
  {path: 'books/add', component: AddBookComponent},
  {path: 'books/:id', component: BookComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
