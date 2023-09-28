import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) { }

  toLogin() {
    const rutaDestino = '/login';
    this.router.navigate([rutaDestino]);
  }

  toAlarma() {
    const rutaDestino = '/alarma';
    this.router.navigate([rutaDestino]);
  }

  toCategoria() {
    const rutaDestino = '/categoria';
    this.router.navigate([rutaDestino]);
  }

}
