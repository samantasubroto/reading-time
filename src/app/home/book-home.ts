import { Component, OnInit } from '@angular/core';
import { Book, Books } from '../model/book-custom-model';
import { BookServiceService } from '../service/book-service.service';

@Component({
  selector: 'app-book-home',
  templateUrl: 'book-home.html',
  styleUrls: ['book-home.scss'],
})
export class BookHome implements OnInit {
  public posts = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  public count = 0;

  public itemsPerPage = 12;

  public currentPage = 1;

  books: Books;
  constructor(private bookService: BookServiceService) {}

  ngOnInit(): void {
    this.bookService.searchByName('sherlock holmes').subscribe((response) => {
      this.books = response;
      console.log(this.books);
    });
  }

  public onChange(event): void {
    console.dir(event);
    this.currentPage = event;
  }
}
