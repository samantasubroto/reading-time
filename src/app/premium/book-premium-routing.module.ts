import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPremium } from './book-premium';

const routes: Routes = [
  {
    path: '',
    component: BookPremium,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookPremiumRoutingModule {}
