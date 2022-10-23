import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSearch } from './book-search';

const routes: Routes = [
  {
    path: '',
    component: BookSearch,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSearchRoutingModule {}
