import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card';
import { Meal } from '../service/meal';
@Component({
  imports: [Card],
  selector: 'app-indicepage',
  styleUrl: './indicepage.css',
  templateUrl: './indicepage.html',
})
export class Indicepage implements OnInit {
  

  letters: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  meals: any[] = [];

  constructor(private mealService : Meal){}
  buscarPorLetra(letra: string): void {
    this.mealService.buscarPorLetra(letra).subscribe((data) => {
      this.meals = data.meals ?? [];
      console.log(data)
    });
  }

  ngOnInit(): void {
    this.buscarPorLetra('A');
  }
}
