import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../classes/card';
import { CARDJSON } from '../testData/cardJson';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private _API_KEY = "https://rbrmaqc4bg.execute-api.us-east-2.amazonaws.com/alpha/"

  constructor(private _http: HttpClient) { }

  public getSingleCard(name: string): Observable<Card> {
    // return of(Card.fromJson(CARDJSON.find(card => card.name === name)));

    const uri = `${this._API_KEY}/card?name=${name}`;

     return this._http.get<any>(uri)
      .pipe(map(response => Card.fromJson(response[0])));
  }
}
