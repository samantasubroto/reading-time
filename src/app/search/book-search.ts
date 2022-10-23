import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { Genres } from '../modal/data-source';
import { BookServiceService } from '../service/book-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'book-search.html',
  styleUrls: ['book-search.scss'],
})
export class BookSearch implements OnInit {
  genres = Genres;
  recentSearches: String[];
  searchForm: FormGroup;

  constructor(
    private bookService: BookServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(),
    });

    this.searchForm
      .get('search')
      .valueChanges.pipe(debounceTime(1000))
      .subscribe((element) => {
        this.bookService.searchByName(element).subscribe((response) => {
          console.log(response);
        });
      });
  }

  searchByGenre(genre: string) {
    this.bookService.searchBookByGenre(genre).subscribe((response) => {
      console.log(response);
    });
  }
}
