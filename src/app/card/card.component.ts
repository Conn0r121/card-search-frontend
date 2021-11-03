import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../services/card.service';
import { Card } from '../classes/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public card!: Card;

  constructor(private _cardService: CardService, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      const cardName = params.name;
      this._getCard(cardName);
    });
  }

  private _getCard(name: string): void {
    this._cardService.getSingleCard(name)
      .subscribe(card => {
        this.card = card;
      });
  }

}
