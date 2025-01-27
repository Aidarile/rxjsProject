import { Component } from '@angular/core';
import { concat, filter, map, merge, Observable, of, reduce, ValueFromArray } from 'rxjs';

@Component({
  selector: 'app-operadores',
  imports: [],
  templateUrl: './operadores.component.html',
  styleUrl: './operadores.component.css'
})
export class OperadoresComponent {
  numbers1$: Observable<ValueFromArray<[number]>> = of (1, 2, 3);
  numbers2$: Observable<ValueFromArray<[number]>> = of (4, 5, 6);

  squaredNumbers$ : Observable<number> =
    this.numbers1$.pipe(map (x => x * x));

  evenNumbers$ : Observable<number> =
    this.numbers2$.pipe(filter(x => x%2 === 0));

  reduceNumbers$ : Observable<number> =
    this.numbers2$.pipe(reduce ((x, y) => x + y));
  
  mergedNumbers$: Observable<number> =
    merge(this.numbers1$, this.numbers2$);
  
  concatNumbers$: Observable<number> =
    concat(this.numbers1$, this.numbers2$);

  
  mapNumbers: number[] = [];  
  filterNumbers: number[] = [];
  reduceNumbers: number[] = [];
  mergedNumbers: number[] = [];
  concatNumbers: number[] = [];

    constructor() {
      this.operadorMap();
      this.operadorFilter();
      this.operadorReduce();
      this.operadorMerge();
      this.operadorConcat();
    }

    private operadorMap(): void {
      this.squaredNumbers$.subscribe(
        {
          next: value => {
            console.log('Map: ', value);
            this.mapNumbers.push(value);
          },
          complete: () => {
            console.log('Map terminado');
          },
          error: err => {
            console.error(err);
          }          
        }
      )
    }

    private operadorFilter(): void {
      this.evenNumbers$.subscribe(
        {
          next: value => {
            console.log('Filter: ', value);
            this.filterNumbers.push(value);
          },
          complete: () => {
            console.log('Filter terminado');
          },
          error: err => {
            console.error(err);
          }          
        }
      )
    }

    private operadorReduce(): void {
      this.reduceNumbers$.subscribe(
        {
          next: value => {
            console.log('Reduce: ', value);
            this.reduceNumbers.push(value);
          },
          complete: () => {
            console.log('Reduce terminado');
          },
          error: err => {
            console.error(err);
          }          
        }
      )
    }

    private operadorMerge(): void {
      this.mergedNumbers$.subscribe(
        {
          next: value => {
            console.log('Merge: ', value);
            this.mergedNumbers.push(value);
          },
          complete: () => {
            console.log('Merge terminado');
          },
          error: err => {
            console.error(err);
          }          
        }
      )
    }

    private operadorConcat(): void {
      this.concatNumbers$.subscribe(
        {
          next: value => {
            console.log('Concat: ', value);
            this.concatNumbers.push(value);
          },
          complete: () => {
            console.log('Concat terminado');
          },
          error: err => {
            console.error(err);
          }          
        }
      )
    }
}
