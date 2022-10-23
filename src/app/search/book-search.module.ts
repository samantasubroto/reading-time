import { IonicModule } from '@ionic/angular';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookSearch } from './book-search';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BookSearchRoutingModule } from './book-search-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BookSearchRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [BookSearch]
})
export class BookSearchModule {
}
