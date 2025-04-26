import { Component } from '@angular/core';
import { WordleService } from '../wordle.service';

@Component({
  selector: 'app-guessform',
  standalone: false,
  templateUrl: './guessform.component.html',
  styleUrl: './guessform.component.css'
})
export class GuessformComponent {
  guess: string = "";
  previous_guesses: Array<string> = [];
  response:any;

  constructor(
    private wordleService:WordleService
  ) {
    this.guess = "";
  }

  addToGuesses() {
    this.previous_guesses.push(this.guess);

    this.guess = "";
  }
}
