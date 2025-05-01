import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guessbox',
  standalone: false,
  templateUrl: './guessbox.component.html',
  styleUrl: './guessbox.component.css'
})
export class GuessboxComponent {
  @Input() letter: string = '';
  @Input() color: "green" | "gold" | "grey" = "grey";
}
