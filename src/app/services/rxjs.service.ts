import { ApiResponsePokemon, ApiResponseRM, CharacterRM, MiPokemon, PokemonBase } from './../components/common/interfaces';
import { BehaviorSubject, catchError, forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  private readonly http: HttpClient = inject(HttpClient);

  carrito: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  addValueToCart(value: number) {
    this.carrito.next(this.carrito.value + value);
  }
  removeValueToCart(value: number) {
    this.carrito.next(this.carrito.value - value);
  }

  /*Rick and Morty: */
  filterCharacter(name: string): Observable<CharacterRM[]>{
    const API = 'https://rickandmortyapi.com/api/character/?name='+name;
    return this.http.get<ApiResponseRM>(API).pipe(
      map((res: ApiResponseRM) => res.results),
      catchError(() => of ([])) 
    );
  }


  /*Pokemon: */
  getPokemons() : Observable<MiPokemon[]> {
    return this.http.get<ApiResponsePokemon> (
      'https://pokeapi.co/api/v2/pokemon/').pipe(
        map(pokeData => pokeData.results),
        switchMap(pokes => forkJoin<MiPokemon[]>(
          pokes.map((poke: PokemonBase) => 
          this.getData(poke))
        ))
      )
  }
  
  private getData(poke: PokemonBase): Observable<MiPokemon> {
    return this.http.get<any>(poke.url).pipe(
      map(data => ({...data.sprites.other['official-artwork'], ...poke}))
    )
  }


}
