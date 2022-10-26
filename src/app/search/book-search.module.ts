import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { BookSearch } from './book-search';
import { BookSearchRoutingModule } from './book-search-routing.module';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BookSearchRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [BookSearch],
  providers:[SearchResultsComponent]
})
export class BookSearchModule {
}
