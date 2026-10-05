import { Component, OnInit, signal } from '@angular/core';
import { Card } from '../card/card';
import { Meal } from '../service/meal';

@Component({
  imports: [Card],
  selector: 'app-searchpage',
  styleUrl: './searchpage.css',
  templateUrl: './searchpage.html',
})
export class Searchpage implements OnInit {
  meals = signal<any[]>([]);

  constructor(private mealService: Meal) {}

  buscar(nombre: string): void {
    this.mealService.buscarPlatillo(nombre).subscribe({
      next: (data) => this.meals.set(data.meals ?? []),
      error: (err) => console.error('Error:', err),
    });
  }

  ngOnInit(): void {
    this.buscar('salad');
  }
}
