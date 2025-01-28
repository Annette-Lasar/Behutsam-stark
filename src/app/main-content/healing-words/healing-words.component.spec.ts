import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingWordsComponent } from './healing-words.component';

describe('HealingWordsComponent', () => {
  let component: HealingWordsComponent;
  let fixture: ComponentFixture<HealingWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealingWordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealingWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
