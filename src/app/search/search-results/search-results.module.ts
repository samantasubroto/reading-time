import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { SearchResultsComponent } from './search-results.component';


@NgModule({
  declarations: [SearchResultsComponent],
  imports: [CommonModule, IonicModule],
})
export class SearchResultsModule {}
