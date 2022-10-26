import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookLibraryRoutingModule } from './book-library-routing.module';
import { IonicModule } from '@ionic/angular';
import { BookLibraryComponent } from './book-library.component';
import { BookPaginationComponent } from '../components/pagination';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [BookLibraryComponent,BookPaginationComponent],
  imports: [
    CommonModule,
    IonicModule,
    BookLibraryRoutingModule,
    NgxPaginationModule,
  ]
})
export class BookLibraryModule { }
