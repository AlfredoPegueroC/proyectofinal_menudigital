import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card';
import { Meal } from '../service/meal';

@Component({
  imports: [Card],
  selector: 'app-searchpage',
  styleUrl: './searchpage.css',
  templateUrl: './searchpage.html',
})
export class Searchpage implements OnInit {
  // private mealService = inject(Meal);

  meals: any[] = [];

  constructor(private mealService : Meal){}

  buscar(nombre: string): void {
    this.mealService.buscarPlatillo(nombre).subscribe((data) => {
      this.meals = data.meals ?? [];
      console.log(data)
    });
  }

  ngOnInit(): void {
    this.buscar("salad");
  }
}
