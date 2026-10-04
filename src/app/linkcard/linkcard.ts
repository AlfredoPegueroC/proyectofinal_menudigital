import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  imports: [RouterLink],
  selector: 'app-linkcard',
  styleUrl: './linkcard.css',
  templateUrl: './linkcard.html',
})
export class Linkcard {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
  @Input() linkText: string = '';
  @Input() linkTo: string = '';
}
