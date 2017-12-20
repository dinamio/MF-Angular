import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurrentBookComp} from '../current-book/current-book.component';
import { AddBookComp} from '../add-book/add-book.component'
import { ShowBooksComp} from '../show-books/show-books.component'

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: ShowBooksComp},
  { path: 'books/add', component: AddBookComp},
  { path: 'books/:id', component: CurrentBookComp}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
