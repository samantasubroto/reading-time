import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookHome } from './book-home';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BookHomePageRoutingModule } from './book-home-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BookHomePageRoutingModule
  ],
  declarations: [BookHome]
})
export class BookHomeModule {}
