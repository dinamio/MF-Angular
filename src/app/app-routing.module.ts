import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChosenBookComponent} from './chosen-book/chosen-book.component';
import { AddBookComponent} from './add-book/add-book.component';
import { AllBooksComponent} from './all-books/all-books.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: AllBooksComponent},
  { path: 'books/add', component: AddBookComponent},
  { path: 'books/:id', component: ChosenBookComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
