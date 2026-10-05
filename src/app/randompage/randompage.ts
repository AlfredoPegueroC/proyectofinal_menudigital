import { Component, OnInit } from '@angular/core';
import { Meal } from '../service/meal';
@Component({
  imports: [],
  selector: 'app-randompage',
  styleUrl: './randompage.css',
  templateUrl: './randompage.html',
})
export class Randompage implements OnInit {
  meal: any = null;
  ingredientes: any[] = [];

  constructor(private MealService: Meal) {}
  busquedaAleatoria(): void {
    this.MealService.buscarAleatorio().subscribe((data) => {
      this.meal = data.meals[0];

      this.ingredientes = [];

      for (let i = 1; i <= 20; i++) {
        const ingrediente = this.meal[`strIngredient${i}`];
        const medida = this.meal[`strMeasure${i}`];

        if (ingrediente) {
          this.ingredientes.push({
            nombre: ingrediente,
            medida: medida,
          });
        }
      }

      console.log(data.meals[0]);
    });
  }

  ngOnInit(): void {
    this.busquedaAleatoria();
  }
}
