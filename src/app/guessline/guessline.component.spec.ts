import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesslineComponent } from './guessline.component';

describe('GuesslineComponent', () => {
  let component: GuesslineComponent;
  let fixture: ComponentFixture<GuesslineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuesslineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuesslineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
