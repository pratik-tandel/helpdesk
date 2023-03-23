import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  searchKey: string;

  @Output() search: EventEmitter<string>;

  constructor() {
    this.searchKey = '';
    this.search = new EventEmitter();
  }

  onSearch() {
    this.search.emit(this.searchKey);
  }

}
