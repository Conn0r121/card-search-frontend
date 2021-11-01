import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Card } from '../classes/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public card!: Card;

  constructor(private _cardService: CardService) {
  }

  ngOnInit(): void {
    this._getCard("Snapcaster Mage");
  }

  private _getCard(name: string): void {
    this._cardService.getSingleCard(name)
      .subscribe(card => this.card = card);
  }

}
