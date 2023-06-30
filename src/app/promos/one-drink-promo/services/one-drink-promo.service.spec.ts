import { TestBed } from '@angular/core/testing';

import { OneDrinkPromoService } from './one-drink-promo.service';

describe('OneDrinkPromoServiceService', () => {
  let service: OneDrinkPromoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneDrinkPromoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
