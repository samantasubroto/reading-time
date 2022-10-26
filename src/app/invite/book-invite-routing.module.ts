import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookInviteComponent } from './book-invite.component';

const routes: Routes = [
  {
    path: '',
    component: BookInviteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookInviteRoutingModule { }
