import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-linkcard',
  styleUrl: './linkcard.css',
  templateUrl: './linkcard.html',
})
export class Linkcard {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
  @Input() linkText: string = '';
}
