import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDrinkPromoComponent } from './one-drink-promo.component';

describe('OneDrinkPromoComponent', () => {
  let component: OneDrinkPromoComponent;
  let fixture: ComponentFixture<OneDrinkPromoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OneDrinkPromoComponent]
    });
    fixture = TestBed.createComponent(OneDrinkPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
