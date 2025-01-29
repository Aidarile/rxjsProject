import { Component, inject } from '@angular/core';
import { RxjsService } from '../../services/rxjs.service';
import { MiPokemon } from '../common/interfaces';

@Component({
  selector: 'app-fork-join',
  imports: [],
  templateUrl: './fork-join.component.html',
  styleUrl: './fork-join.component.css'
})
export class ForkJoinComponent {
  private readonly service: RxjsService = inject(RxjsService);
  pokemons: MiPokemon[] = [];

  constructor() {
    this.loadPokemons();
  }

  private loadPokemons() {
    this.service.getPokemons().subscribe(
      {
        next: value => {
          this.pokemons = value;
        },
        error: err => {
          console.error(err);
        }
      }
    )
  }

}
