import { Component } from '@angular/core';
import { Linkcard } from '../linkcard/linkcard';

@Component({
  imports: [Linkcard],
  selector: 'app-homepage',
  styleUrl: './homepage.css',
  templateUrl: './homepage.html',
})
export class Homepage {}
