import { RxjsService } from './../../services/rxjs.service';
import { Component, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-behavior-subject',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css'
})
export class BehaviorSubjectComponent {
  myBehaviorSubject : BehaviorSubject<string> =
  new BehaviorSubject<string>('Initial');

  private readonly rxjsService: RxjsService = inject(RxjsService);
  valor: number = 0;

  ejemploBS() {
    const texto = this.myBehaviorSubject.value + 'Holaaaa';
    this.myBehaviorSubject.next(texto);
  }

  addValue(value: number) {
    this.rxjsService.addValueToCart(value);
  }

  removeValue(value: number) {
    this.rxjsService.addValueToCart(value);
  }
}
