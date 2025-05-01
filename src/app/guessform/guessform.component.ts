import { Component, OnInit } from '@angular/core';
import { WordleService } from '../wordle.service';

//Sources used: https://angular.dev/api/core/OnInit, https://angular.dev/api/common/NgStyle

@Component({
  selector: 'app-guessform',
  standalone: false,
  templateUrl: './guessform.component.html',
  styleUrl: './guessform.component.css'
})
export class GuessformComponent implements OnInit {
  guess: string = "";
  previous_guesses: Array<string> = [];
  target_word = "computer";

  constructor(
    private wordleService:WordleService
  ) { }

  ngOnInit() {
    this.fetchTargetWord();
    console.log("TARGETWORD", this.target_word)

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
  }

  newGame() { }
}
