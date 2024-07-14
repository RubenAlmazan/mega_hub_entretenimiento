import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})

export class ConfiguracionComponent {

  constructor() { }

  toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
}
