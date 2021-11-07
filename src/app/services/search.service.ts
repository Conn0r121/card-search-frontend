import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _router: Router) { }

  public defaultSearch(searchValue: String) {
    this._router.navigate(['/card'], { queryParams: { name: searchValue } });
  }
}