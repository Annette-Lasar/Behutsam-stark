import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { GreetingComponent } from './greeting/greeting.component';
import { OffersComponent } from './offers/offers.component';
import { HealingWordsComponent } from './healing-words/healing-words.component';

@Component({
  selector: 'best-main-content',
  standalone: true,
  imports: [HeroComponent, GreetingComponent, OffersComponent, HealingWordsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
