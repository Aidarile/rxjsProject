import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {
  observable$ = new Observable((subscriber) => { 
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
  })

  comenzarObservable() {
    this.observable$.subscribe( {
      next: value => {
        console.log(value)
      },
      complete: () => {
        console.log('Completed');
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
