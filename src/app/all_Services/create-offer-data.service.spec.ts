import { TestBed } from '@angular/core/testing';

import { CreateOfferDataService } from './create-offer-data.service';

describe('CreateOfferDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateOfferDataService = TestBed.get(CreateOfferDataService);
    expect(service).toBeTruthy();
  });
});
