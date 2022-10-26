import { Component, Input, OnInit } from '@angular/core';
import { Books } from 'src/app/model/book-custom-model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('working')
  }

  isModalOpen = false;
 // @Input() books : Books;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
