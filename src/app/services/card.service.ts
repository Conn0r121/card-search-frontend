import { Injectable } from '@angular/core';
import { Card } from '../classes/card';
import { CARDJSON } from '../testData/cardJson';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  public getSingleCard(name: string): Card {
    return Card.fromJson(CARDJSON.find(card => card.name === name));
  }
}
