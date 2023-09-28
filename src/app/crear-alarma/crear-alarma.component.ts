import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-alarma',
  templateUrl: './crear-alarma.component.html',
  styleUrls: ['./crear-alarma.component.css']
})
export class CrearAlarmaComponent {

  constructor(private router: Router) { }

  toDashboard() {
    const rutaDestino = '/dashboard';
    this.router.navigate([rutaDestino]);
  }

}
