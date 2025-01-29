import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { GreetingComponent } from './greeting/greeting.component';
import { OffersComponent } from './offers/offers.component';
import { HealingWordsComponent } from './healing-words/healing-words.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';
import { ReadyToJourneyComponent } from './ready-to-journey/ready-to-journey.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'best-main-content',
  standalone: true,
  imports: [
    HeroComponent,
    GreetingComponent,
    OffersComponent,
    HealingWordsComponent,
    FeedbackComponent,
    NewsletterComponent,
    PriceCalculatorComponent,
    ReadyToJourneyComponent,
    ContactComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
