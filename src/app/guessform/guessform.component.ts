import { Component, OnInit } from '@angular/core';
import { WordleService } from '../wordle.service';

@Component({
  selector: 'app-guessform',
  standalone: false,
  templateUrl: './guessform.component.html',
  styleUrl: './guessform.component.css'
})
export class GuessformComponent implements OnInit {
  guess: string = "";
  previous_guesses: Array<string> = [];
  message: string = "";
  target_word = "";

  constructor(
    private wordleService:WordleService
  ) { }

  ngOnInit() {
    this.fetchTargetWord();
  }

  addToGuesses() {
    this.previous_guesses.push(this.guess);

    this.guess = "";
    console.log(this.previous_guesses);
  }

  fetchTargetWord() {
    this.wordleService.getRequest().subscribe(
      (respData) => {
        this.target_word = respData.target_word;
      }
    );
    console.log("TARGETWORD", this.target_word)
  }

  checkGuess(guess: string) {
    
  }
}
