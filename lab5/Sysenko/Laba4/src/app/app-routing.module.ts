import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent} from './Book/Book.component';
import { AddBookComponent} from './Add/Add.component'
import { AllBooksComponent} from './All/All.component'

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: AllBooksComponent},
  { path: 'books/add', component: AddBookComponent},
  { path: 'books/:id', component: BookComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
