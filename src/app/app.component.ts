import { Component, OnInit} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CatalogoComponent, ConfiguracionComponent, FavoritosComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // Despliegue de navbar
  visible(): void {
    const navbarJuegos = document.querySelector('.navbar-juegos') as HTMLElement;

    if (navbarJuegos.style.display === 'none') {
      navbarJuegos.style.display = 'block';
    }
    else {
      navbarJuegos.style.display = 'none';
    }

  }

  // Mostrar Opciones disponibles
  muestraPrincipal(seccion: string): void {

    if (seccion === 'peliculas') {
      var peliculas = document.getElementById('principal_peliculas') as HTMLElement;
      peliculas.classList.toggle("hidden");
      var favoritos = document.getElementById('principal_favoritas') as HTMLElement;
      favoritos.classList.add("hidden");
      var configuracion = document.getElementById('principal_configuracion') as HTMLElement;
      configuracion.classList.add("hidden");
    }
    if (seccion === 'favoritas') {
      var favoritos = document.getElementById('principal_favoritas') as HTMLElement;
      favoritos.classList.toggle("hidden");
      var configuracion = document.getElementById('principal_configuracion') as HTMLElement;
      configuracion.classList.add("hidden");
      var peliculas = document.getElementById('principal_peliculas') as HTMLElement;
      peliculas.classList.add("hidden");
    }
    if (seccion === 'configuracion') {
      var configuracion = document.getElementById('principal_configuracion') as HTMLElement;
      configuracion.classList.toggle("hidden");
      var peliculas = document.getElementById('principal_peliculas') as HTMLElement;
      peliculas.classList.add("hidden");
      var favoritos = document.getElementById('principal_favoritas') as HTMLElement;
      favoritos.classList.add("hidden");

    }

  }

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      if (loginData.username !== '' && loginData.password !== '') {
        const estelar = document.getElementById('estelar') as HTMLElement;
        estelar.style.display = 'block'; // Mostrar estelar
        const sesion = document.getElementById('sesion') as HTMLElement;
        sesion.style.display = 'none'; // Ocultar sesion
      }
      // Aquí puedes agregar la lógica para manejar la autenticación
    }
  }

  cerrarSesion(): void{
    const estelar = document.getElementById('estelar') as HTMLElement;
        estelar.style.display = 'none'; // Mostrar estelar
        const sesion = document.getElementById('sesion') as HTMLElement;
        sesion.style.display = 'flex'; // Ocultar sesion

  }


}
