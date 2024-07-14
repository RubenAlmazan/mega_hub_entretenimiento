import { ComponentFixture, TestBed } from '@angular/core/testing';
import { fakeAsync, tick } from '@angular/core/testing';
import { FavoritosComponent } from './favoritos.component';
import { PeliculaService } from '../../pelicula.service';

describe('FavoritosComponent', () => {
  let component: FavoritosComponent;
  let fixture: ComponentFixture<FavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritosComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create add favorito', fakeAsync(() => {
    component.agregarFavorito(1);
    tick(3000);
    expect(component.lista.size).toBe(1);
  }));

  it('should return defined for existent movie id', () => {

    const foundPelicula = component.findPelicula(4);
    expect(foundPelicula).toBeDefined();

  });

  it('should return list with conditions', () => {
    let listaIdDiv = component.lista_peliculas.map(pelicula => pelicula.id_div);
    expect(Array.isArray(listaIdDiv)).toBe(true);
  });

  it('should return hidden value = false in images when the condition is true', () => {
    const mockElement = document.createElement('div');
    spyOn(document, 'getElementById').and.callFake((id: string) => {
      if (id === 'seccion2') {
        return mockElement; // Retorna el elemento simulado para 'seccion2'
      }
      return null; // Retorna null para otros elementos
    });

    component.mostrarPelicula('seccion2', 2);

    // Verificar que toggle 'hidden' se haya llamado en el elemento simulado
    expect(mockElement.classList.contains('hidden')).toBe(false);
  });

  it('should return hidden value = false in description when the condition is true', () => {
    const mockElement = document.createElement('div');
    spyOn(document, 'getElementById').and.callFake((id: string) => {
      if (id === 'seccion2') {
        return mockElement; // Retorna el elemento simulado para 'seccion2'
      }
      return null; // Retorna null para otros elementos
    });

    component.descripcionPelicula('seccion2', 2);

    // Verificar que toggle 'hidden' se haya llamado en el elemento simulado
    expect(mockElement.classList.contains('hidden')).toBe(false);
  });

  it('should create remove favorito', fakeAsync(() => {
    component.quitarPelicula(1);
    tick(3000);
    expect(component.lista.size).toBe(0);
  }));

});
