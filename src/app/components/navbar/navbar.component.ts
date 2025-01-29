import { RxjsService } from './../../services/rxjs.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: any = [
    {
      ruta: "/observable",
      nombre: "Observables"
    },
    {
      ruta: "/observable-frio",
      nombre: "Frio"
    },
    {
      ruta: "/observable-caliente",
      nombre: "Caliente"
    },
    {
      ruta: "/operadores",
      nombre: "Operadores"
    },
    {
      ruta: "/switch-map",
      nombre: "SwitchMap"
    },
    {
      ruta: "/subject",
      nombre: "Subject"
    },
    {
      ruta: "/fork-join",
      nombre: "Forkjoin"
    }
  ];
  carrito: number = 0;
  private readonly rxjsService: RxjsService = inject(RxjsService);

  constructor() {
    this.rxjsService.carrito.subscribe(
      {
        next: value => {
          this.carrito = value;
        },
        error: err => {
          console.error(err);
        }
      }
    );
  }
}