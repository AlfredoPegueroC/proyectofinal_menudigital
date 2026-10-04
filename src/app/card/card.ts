import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() cuisine: string = '';
}
