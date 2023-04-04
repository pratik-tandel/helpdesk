import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  /** search key event emitter */
  @Output() search: EventEmitter<string>;

  /** search key */
  searchKey: string;

  constructor() {
    this.searchKey = '';
    this.search = new EventEmitter();
  }

  /** on search key change  */
  onSearch() {
    this.search.emit(this.searchKey);
  }

}
