import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book, Books } from '../model/book-custom-model';
import { BookServiceService } from '../service/book-service.service';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.scss'],
})
export class BookLibraryComponent implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    protected bookService : BookServiceService,
  ) { }

  books: Books;
  public count = 0;
  public itemsPerPage = 20;
  public currentPage = 1;

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.bookService.searchByName(params.code).subscribe((response) => {
        this.books = response;
      });
    });
  }

  onChange(event: number){
    this.route.queryParams.subscribe((params: Params) => {
      this.bookService.searchByNamePage(params.code, this.itemsPerPage,this.itemsPerPage*(event-1)).subscribe((response) => {
        this.books = response;
      });
    });
    this.currentPage = event;
  }
}
