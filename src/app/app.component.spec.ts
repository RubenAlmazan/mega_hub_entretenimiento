import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should the elements for the navbar show and hide when i click the button menu', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const navbarJuegosElement: HTMLElement = fixture.nativeElement.querySelector('.navbar-juegos');

    // Simular inicialmente el estilo display como 'none'
    navbarJuegosElement.style.display = 'none';

    app.visible();
    expect(navbarJuegosElement.style.display).toBe('block');

    // Llamar a la función visible() nuevamente para simular el toggle
    app.visible();
    expect(navbarJuegosElement.style.display).toBe('none');
  });

  it('should show the peliculas seccion and hide the others', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.muestraPrincipal('peliculas');
    const peliculas = document.getElementById('principal_peliculas');
    const favoritos = document.getElementById('principal_favoritas');
    const configuracion = document.getElementById('principal_configuracion');
    expect(peliculas?.classList.contains('hidden')).toBe(false);
    expect(favoritos?.classList.contains('hidden')).toBe(true);
    expect(configuracion?.classList.contains('hidden')).toBe(true);
  });

  it('should show favoritas seccion and hide the others', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.muestraPrincipal('favoritas');
    const peliculas = document.getElementById('principal_peliculas');
    const favoritos = document.getElementById('principal_favoritas');
    const configuracion = document.getElementById('principal_configuracion');
    expect(peliculas?.classList.contains('hidden')).toBe(true);
    expect(favoritos?.classList.contains('hidden')).toBe(false);
    expect(configuracion?.classList.contains('hidden')).toBe(true);
  });

  it('should show the configuracion seccion and hide the others', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.muestraPrincipal('configuracion');
    const peliculas = document.getElementById('principal_peliculas');
    const favoritos = document.getElementById('principal_favoritas');
    const configuracion = document.getElementById('principal_configuracion');
    expect(peliculas?.classList.contains('hidden')).toBe(true);
    expect(favoritos?.classList.contains('hidden')).toBe(true);
    expect(configuracion?.classList.contains('hidden')).toBe(false);
  });

  it('should show estelar seccion and hide sesion section and validate the form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.loginForm = new FormGroup({
      username: new FormControl('testuser', Validators.required),
      password: new FormControl('testpassword', Validators.required)
    });

    // Llamar al método onSubmit
    app.onSubmit();

    // Obtener los elementos estelar y sesión del DOM simulado
    const estelarElement = fixture.nativeElement.querySelector('#estelar');
    const sesionElement = fixture.nativeElement.querySelector('#sesion');

    // Verificar que estelar esté visible y sesión esté oculto
    expect(estelarElement.style.display).toBe('block');
    expect(sesionElement.style.display).toBe('none');
  });

  it('should no hide the view if the form is not valid', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    // Llamar al método onSubmit
    app.onSubmit();

    // Obtener los elementos estelar y sesión del DOM simulado
    const estelarElement = fixture.nativeElement.querySelector('#estelar');
    const sesionElement = fixture.nativeElement.querySelector('#sesion');

    // Verificar que estelar y sesión no hayan cambiado de visualización
    expect(estelarElement.style.display).not.toBe('block');
    expect(sesionElement.style.display).not.toBe('none');
  });

});
