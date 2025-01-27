import { Post } from './../common/interfaces';
import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-observable-frio',
  imports: [AsyncPipe],
  templateUrl: './observable-frio.component.html',
  styleUrl: './observable-frio.component.css'
})

export class ObservableFrioComponent {
  private readonly http: HttpClient = inject(HttpClient);
  data$!: Observable<Post>

  constructor() {
    this.data$ = this.http.get<Post> (
      'https://jsonplaceholder.typicode.com/posts/1'
    )
  }
}

