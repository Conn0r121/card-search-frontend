import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CardService } from './card.service';
import { Card } from '../classes/card';
import { CARDJSON } from '../testData/cardJson'

describe('CardService', () => {
  let httpTestingController: HttpTestingController;
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CardService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get card', () => {
    const cardJson = CARDJSON[0];
    const expectedCardObject = Card.fromJson(cardJson);
    service.getSingleCard('Opt').subscribe(returnedCardObject => {
      expect(returnedCardObject).toEqual(expectedCardObject);
    });

    const expectedURI = 'https://rbrmaqc4bg.execute-api.us-east-2.amazonaws.com/alpha//card?name=Opt';

    const req = httpTestingController.expectOne(expectedURI);

    expect(req).toBeTruthy();

    req.flush([cardJson]);
  });

});
