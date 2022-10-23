import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookHome } from './book-home';

const routes: Routes = [
  {
    path: '',
    component: BookHome,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookHomePageRoutingModule {}
