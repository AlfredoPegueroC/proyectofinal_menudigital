import { Component, OnInit, signal } from '@angular/core';
import { Card } from '../card/card';
import { Meal } from '../service/meal';

@Component({
  imports: [Card],
  selector: 'app-indicepage',
  styleUrl: './indicepage.css',
  templateUrl: './indicepage.html',
})
export class Indicepage implements OnInit {
  letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  meals = signal<any[]>([]);
  letraActiva = signal('A');

  constructor(private mealService: Meal) {}

  buscarPorLetra(letra: string): void {
    this.letraActiva.set(letra);

    this.mealService.buscarPorLetra(letra).subscribe({
      next: (data) => this.meals.set(data.meals ?? []),
      error: (err) => console.error('Error:', err),
    });
  }

  ngOnInit(): void {
    this.buscarPorLetra('A');
  }
}
