import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent {

  constructor(private router: Router) { }

  toDashboard() {
    const rutaDestino = '/dashboard';
    this.router.navigate([rutaDestino]);
  }

}
