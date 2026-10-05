import { Component, OnInit, signal } from '@angular/core';
import { Meal } from '../service/meal';

@Component({
  imports: [],
  selector: 'app-randompage',
  styleUrl: './randompage.css',
  templateUrl: './randompage.html',
})
export class Randompage implements OnInit {
  meal = signal<any>(null);
  ingredientes = signal<any[]>([]);

  constructor(private MealService: Meal) {}

  busquedaAleatoria(): void {
    this.MealService.buscarAleatorio().subscribe({
      next: (data) => {
        const meal = data.meals[0];
        const lista: any[] = [];

        for (let i = 1; i <= 20; i++) {
          const nombre = meal[`strIngredient${i}`];
          if (nombre) {
            lista.push({ nombre, medida: meal[`strMeasure${i}`] });
          }
        }

        this.meal.set(meal);
        this.ingredientes.set(lista);
      },
      error: (err) => console.error('Error:', err),
    });
  }

  ngOnInit(): void {
    this.busquedaAleatoria();
  }
}