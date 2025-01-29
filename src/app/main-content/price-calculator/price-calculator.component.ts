import { Component } from '@angular/core';
import { PriceCalculatorService } from '../../shared/services/price-calculator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'best-price-calculator',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
  ],
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss'],
})
export class PriceCalculatorComponent {
  currentlySelectedHours = 1;
  totalPrice = 60;

  constructor(private priceCalculatorService: PriceCalculatorService) {}

  updatePrice(): void {
    this.totalPrice = this.priceCalculatorService.calculatePrice(
      this.currentlySelectedHours
    );
  }

  // für Slider von Angular Material:
  selectedHours = 1; // Startwert des Sliders
  priceInAll = 75;


  formatLabel(value: number): string {
    this.currentlySelectedHours = value; // Stundenwert speichern
    this.totalPrice = this.priceCalculatorService.calculatePrice(value); // Preis berechnen
    return `${value} Stunden`; // Label für den Slider zurückgeben
  }
}
