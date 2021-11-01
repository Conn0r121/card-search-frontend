import { Injectable } from '@angular/core';
import { Card } from '../classes/card';
import { CARDJSON } from '../testData/cardJson';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  public getSingleCard(name: string): Observable<Card> {
    return of(Card.fromJson(CARDJSON.find(card => card.name === name)));
  }
}
