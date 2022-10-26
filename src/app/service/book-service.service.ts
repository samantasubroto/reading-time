import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../model/book-custom-model';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  constructor(private https: HttpClient) {}

  url: string = 'https://www.googleapis.com/books/v1/volumes?q=';
  api: string = 'AIzaSyD7mcRtgxUxiUWLzmofUxrtqudbBzUlH9Q';

  searchBookByGenre(genre: string): Observable<Books> {
    return this.https.get<Books>(this.url + genre + '&key=' + this.api);
  }

  /***
   * Duplication is still there in localstorage need to solve
   ***/

  searchByName(name: String): Observable<Books> {
    if (name !== '') {
      // console.log('coming here bc');

      var existingRecentSearchesItem =
        JSON.parse(localStorage.getItem('recentsearch')) || [];
      var newRecentSearch = { name };
      existingRecentSearchesItem.push(newRecentSearch);
      existingRecentSearchesItem = existingRecentSearchesItem.filter(
        (arr, index, self) =>
          index === self.findIndex((t) => t.name === arr.name)
      );
      if (existingRecentSearchesItem.length >= 8) {
        existingRecentSearchesItem.splice(0, 1);
      }
      localStorage.setItem(
        'recentsearch',
        JSON.stringify(existingRecentSearchesItem)
      );
      return this.https.get<Books>(
        this.url + name + '&maxResults=20' + '&key=' + this.api
      );
    } else {
      console.log('its a damn null value');
      return null;
    }
  }

  searchByNamePage(name: string, maxResults?: number, startingPage?: number) {
    return this.https.get<Books>(
      this.url +
        name +
        '&maxResults=' +
        maxResults +
        '&startIndex=' +
        startingPage +
        '&key=' +
        this.api
    );
  }
}
