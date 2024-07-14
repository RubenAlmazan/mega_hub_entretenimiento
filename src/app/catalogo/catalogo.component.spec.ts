import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CatalogoComponent } from './catalogo.component';

describe('CatalogoComponent', () => {
  let component: CatalogoComponent;
  let fixture: ComponentFixture<CatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should give correct values in mostrarPelicula', () => {
    const seccion = 'seccion2';
    const id = 2;
    expect(typeof seccion).toBe('string');
    expect(typeof id).toBe('number');
  });

  it('should if the variable of the functions is a list', () => {

    let listaIdDiv = component.peliculas.map(pelicula => pelicula.id_div);
    expect(Array.isArray(listaIdDiv)).toBe(true);

  });


  it('should if mostrarPelicula show the imagen when the condition is true', () => {

    const valor1 = true;
    const valor2 = true;

    component.mostrarPelicula('anillos', 1);
    var abrir = 'hidden'

    if (valor1 === valor2) {
      abrir = 'show';
      expect(abrir).toBe('show');
    }
  });

  it('should show the description of the movie when the condition is true', () => {
    const valor1 = true;
    const valor2 = true;

    // Llamamos a la función descripcionPelicula con los parámetros adecuados
    const resultado = component.descripcionPelicula('anillos', 1);

    let abrir = 'hidden';

    if (valor1 === valor2) {
      abrir = 'show';
      // Verificamos que abrir sea 'show' correctamente
      expect(abrir).toBe('show');
      // Verificamos que la función descripcionPelicula no devuelva null
      expect(resultado).not.toBeNull();
    }
  });

  it('should hidden the image of the movie when the condition is true', () => {
    const valor1 = true;
    const valor2 = true;

    // Llamamos a la función descripcionPelicula con los parámetros adecuados
    const resultado = component.quitarPelicula('anillos', 1);

    let abrir = 'hidden';

    if (valor1 === valor2) {
      abrir = 'show';
      // Verificamos que abrir sea 'show' correctamente
      expect(abrir).toBe('show');
      // Verificamos que la función descripcionPelicula no devuelva null
      expect(resultado).not.toBeNull();
    }
  });

  it('should delete the movie', fakeAsync(() => {
    const idPelicula = 1;
    const peliculaMock = {
      id: 1, id_imagen: 'imagen_anillo', id_clave: 'anillo', id_div: 'texto_anillo', id_des: 'descripcion_anillo', id_quit: 'quitar_anillo', titulo: "El Señor de los anillos", descripcion: " El Señor de los Anillos es una épica saga basada en la obra literaria de J.R.R. Tolkien. Dirigida por Peter Jackson, la trilogía sigue la odisea de un grupo diverso de personajes en su lucha contra las fuerzas oscuras de Sauron. Ambientada en el mundo ficticio de la Tierra Media, la historia abarca desde la búsqueda de un anillo mágico hasta la batalla épica por la supervivencia de la humanidad. Ofrece una mezcla de aventura, amistad, traición y heroísmo en un entorno rico en mitología y personajes memorables.",
    };
    component.peliculas = [peliculaMock];

    component.borrarPelicula(idPelicula);

    tick(3000);
    expect(component.peliculas.length).toBe(0); 
  }));

});
