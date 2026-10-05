import { Component, inject } from '@angular/core';
import { Meal } from '../service/meal';
@Component({
  imports: [],
  selector: 'app-randompage',
  styleUrl: './randompage.css',
  templateUrl: './randompage.html',
})
export class Randompage {
  private MealService = inject(Meal);

  meals: any[] = [];


  busquedaAleatoria(): void{
    this.MealService.buscarAleatorio().subscribe((data) =>{
      this.meals = data.meals ?? [];

      console.log(data);
    })
  }
}
