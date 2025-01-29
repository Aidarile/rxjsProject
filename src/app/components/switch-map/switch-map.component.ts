import { Component, inject } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { CharacterRM } from '../common/interfaces';
import { AsyncPipe } from '@angular/common';
import { RxjsService } from '../../services/rxjs.service';

@Component({
  selector: 'app-switch-map',
  imports: [AsyncPipe],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css'
})
export class SwitchMapComponent {
  characters$!: Observable<CharacterRM[]>;
  searchTerm$: Subject<string> = new Subject<string>();

  private readonly rxjsService : RxjsService = inject(RxjsService);
  
  constructor() {
    this.characters$ = this.searchTerm$.pipe(
      switchMap((term: string) => 
      this.rxjsService.filterCharacter(term))
    )
  }

  search(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    this.searchTerm$.next(element.value);
  }
}


