import { Component, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { RxjsService } from '../../services/rxjs.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-subject',
  imports: [AsyncPipe],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {
  mySubject : Subject<string> =
    new Subject<string>();
  
    private readonly rxjsService: RxjsService = inject(RxjsService);
    valor: number = 0;
  
    ejemploS() {
      const texto = 'Holaaaa';
      this.mySubject.next(texto);
    }
  

}
