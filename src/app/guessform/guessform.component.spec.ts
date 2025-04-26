import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessformComponent } from './guessform.component';

describe('GuessformComponent', () => {
  let component: GuessformComponent;
  let fixture: ComponentFixture<GuessformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuessformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
