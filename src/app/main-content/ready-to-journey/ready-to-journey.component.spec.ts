import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyToJourneyComponent } from './ready-to-journey.component';

describe('ReadyToJourneyComponent', () => {
  let component: ReadyToJourneyComponent;
  let fixture: ComponentFixture<ReadyToJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadyToJourneyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadyToJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
