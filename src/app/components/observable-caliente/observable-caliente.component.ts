import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-caliente',
  imports: [],
  templateUrl: './observable-caliente.component.html',
  styleUrl: './observable-caliente.component.css'
})
export class ObservableCalienteComponent implements OnDestroy {

  counter: number = 0;
  private intervalSubscription!: Subscription;

  constructor() {
    this.start();
  }

  protected start() {
    this.intervalSubscription = interval(1000).subscribe(
      {
        next: value => {
          this.counter = value;
        },
        complete: () => {
          console.log('Complete!!!');
        },
        error: err => {
          console.error(err);
        }
      }
    );
  }

  stop(): void {
    this.intervalSubscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
