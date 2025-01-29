import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PriceCalculatorService {
  private BASE_PRICE = 60;

  calculatePrice(hours: number): number {
    if (hours <= 10) {
      return hours * this.BASE_PRICE;
    } else {
      const discountPerHour = Math.floor((hours - 1) / 10) * 0.5;
      const effectivePricePerHour = this.BASE_PRICE - discountPerHour;
      return hours * effectivePricePerHour;
    }
  }
}
