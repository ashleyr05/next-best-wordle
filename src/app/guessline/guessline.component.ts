import { Component, Input, OnInit } from '@angular/core';

//Sources used: https://www.geeksforgeeks.org/typescript-string-includes-method/, https://www.tutorialspoint.com/typescript/typescript_array_indexof.htm

@Component({
  selector: 'app-guessline',
  standalone: false,
  templateUrl: './guessline.component.html',
  styleUrl: './guessline.component.css'
})
export class GuesslineComponent implements OnInit {
  @Input() guess: string = '';
  @Input() target_word: string = '';

  //THIS IS A LIST THAT WILL STORE THE COLORS FOR EACH LETTER
  letter_colors: ('green' | 'gold' | 'grey')[] = [];

  length_message: string = '';

  ngOnInit(): void {
    this.setColors();
    this.checkLength();
  }

  setColors() {
    const guess_letters = this.guess.toLowerCase().split('');
    const target_letters = this.target_word.toLowerCase().split('');

    //THIS LIST STORES WHETHER LETTERS HAVE BEEN USED OR NOT TO PROTECT AGAINST DOUBLE LETTERS
    const used_letters = Array(this.target_word.length).fill(false)

    //TODO: CHECK IF THE LETTER IS IN THE RIGHT POSITION INDEXES OF LETTERS EQUAL EACH OTHER 
    for (let i = 0; i < guess_letters.length; i++) {
          // IF YES GREEN AND SET USED TO TRUE
      if (guess_letters[i] == target_letters[i]) {
        this.letter_colors[i] = 'green';
        used_letters[i] = true;
      }
          // IF NOT SET COLOR TO GREY 
      else {
        this.letter_colors[i] = 'grey';
      }
    }

    //TODO: THEN GO THROUGH ALL GREY LETTERS AND SEE IF THE LETTER EXISTS IN THE STRING AND THAT IT IS NOT USED
    for (let i = 0; i < guess_letters.length; i++) {
      //IF FOUND SET TO YELLOW --> THEN USED
      //IF NOT THEN KEEP IT AT GREY
      if (this.letter_colors[i] == 'grey') {
        if (this.target_word.includes(guess_letters[i])) {
          for (let j = 0; j < target_letters.length; j++){
            if (guess_letters[i] == target_letters[j]) {
              if (!used_letters[j]) {
                this.letter_colors[i] = 'gold';
                used_letters[j] = true;
              }
            }
          }
        }
      }
    }
  }

  checkLength() {
    if (this.guess.length == this.target_word.length) {
      this.length_message = 'Correct amount of letters!';
    }
    else if (this.guess.length > this.target_word.length) {
      this.length_message = 'Too many letters!';
    }
    else {
      this.length_message = 'Too few letters!';
    }
  }
}
