import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchValue = '';
  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
  }

  public search(): void {
    this._searchService.defaultSearch(this.searchValue.toLocaleLowerCase());
  }

  public clearSearchValue(): void {
    this.searchValue = '';
  }
}
