import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book-custom-model';

@Component({
  selector: 'app-book-pagination',
  templateUrl: './book-pagination.component.html',
  styleUrls: ['./book-pagination.component.scss'],
})
export class BookPaginationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() book: Book;

}
