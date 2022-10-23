import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(
    private https: HttpClient
  ) { }

  url: string = 'https://www.googleapis.com/books/v1/volumes?q=';
  api: string = 'AIzaSyD7mcRtgxUxiUWLzmofUxrtqudbBzUlH9Q';

  searchBookByGenre(genre: string){
    return this.https.get(this.url+genre+'&key='+this.api);
  }

  searchByName(name: any){
    localStorage.setItem('recentsearch',JSON.stringify(name));
    return this.https.get(this.url+name+'&key='+this.api);
  }
}
