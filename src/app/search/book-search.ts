import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Books } from '../model/book-custom-model';

import { Genres, RecentSearch } from '../model/data-source';
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
  recentSearchs;
  RecentSearchTitle = RecentSearch;
  books: Books;
  constructor(private bookService: BookServiceService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(),
    });

    this.recentSearches = JSON.parse(localStorage.getItem('recentsearch'));
    this.searchForm
      .get('search')
      .valueChanges.pipe(debounceTime(3000))
      .subscribe((element) => {
        if(element){
          this.bookService.searchByName(element).subscribe((response) => {
            console.log(response)
          });
        }
      });
  }

  searchByGenre(genre: string) {
    this.bookService.searchBookByGenre(genre).subscribe((response) => {
      console.log(response)
    });
  }

  clearLocalStorage() {
    localStorage.removeItem('recentsearch');
    this.ngOnInit();
  }

  searchByRecentSearchName(recentSearchName: String) {
    this.bookService.searchByName(recentSearchName).subscribe((response) => {
      this.books = response;
      console.log(this.books);
    });
  }
}
