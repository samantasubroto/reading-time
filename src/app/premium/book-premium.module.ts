import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookPremium } from './book-premium';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BookPremiumRoutingModule } from './book-premium-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BookPremiumRoutingModule
  ],
  declarations: [BookPremium]
})
export class BookPremiumModule {}
