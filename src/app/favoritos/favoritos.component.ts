import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../pelicula.service';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { delay, tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
  constructor(private numero: PeliculaService) { }

  lista: Set<any> = new Set();

  lista_peliculas = [
    { id: 1, id_imagen: 'imagen_anillo', id_clave: 'anillo', id_div: 'texto_fav_anillo', id_des: 'descripcion_fav_anillo', id_quit: 'quitar_anillo', titulo: "El Señor de los anillos", descripcion: " AAA El Señor de los Anillos es una épica saga basada en la obra literaria de J.R.R. Tolkien. Dirigida por Peter Jackson, la trilogía sigue la odisea de un grupo diverso de personajes en su lucha contra las fuerzas oscuras de Sauron. Ambientada en el mundo ficticio de la Tierra Media, la historia abarca desde la búsqueda de un anillo mágico hasta la batalla épica por la supervivencia de la humanidad. Ofrece una mezcla de aventura, amistad, traición y heroísmo en un entorno rico en mitología y personajes memorables." },
    { id: 2, id_imagen: 'imagen_avatar', id_clave: 'avatar', id_div: 'texto_fav_avatar', id_des: 'descripcion_fav_avatar', id_quit: 'quitar_avatar', titulo: "Avatar", descripcion: " AAA Avatar es una película de ciencia ficción dirigida por James Cameron, ambientada en el exuberante mundo de Pandora en el año 2154. La historia sigue a Jake Sully, un exmarine parapléjico que, a través del programa Avatar, controla un cuerpo híbrido humano-Na'vi para infiltrarse en la comunidad indígena de Pandora. Mientras se integra en su cultura y se enamora de Neytiri, una guerrera Na'vi, Jake empieza a cuestionar las intenciones de los humanos que buscan explotar los recursos del planeta. Con innovadores efectos visuales y un potente mensaje sobre la protección ambiental y elrespeto a las culturas indígenas." },
    { id: 3, id_imagen: 'imagen_fiction', id_clave: 'fiction', id_div: 'texto_fav_fiction', id_des: 'descripcion_fav_fiction', id_quit: 'quitar_fiction', titulo: "Pulp Fiction", descripcion: " AAA Pulp Fiction es una película de culto dirigida por Quentin Tarantino, estrenada en 1994, que entrelaza varias historias de personajes del submundo criminal de Los Ángeles. Con un elenco estelar que incluye a John Travolta, Uma Thurman, Samuel L. Jackson y Bruce Willis, la película se distingue por su estructura narrativa no lineal, diálogos ingeniosos y escenas icónicas. Las tramas, que giran en torno a dos sicarios, un boxeador, la esposa de un gánster y dos delincuentes menores, se cruzan de maneras inesperadas, ofreciendo una mezcla de humor negro, violencia y redención." },
    { id: 4, id_imagen: 'imagen_inter', id_clave: 'inter', id_div: 'texto_fav_inter', id_des: 'descripcion_fav_inter', id_quit: 'quitar_inter', titulo: "Interstellar", descripcion: " AAA Interestelar es una epopeya de ciencia ficción dirigida por Christopher Nolan, estrenada en 2014, que sigue a un grupo de exploradores espaciales en una misión desesperada por salvar a la humanidad. En un futuro distópico donde la Tierra enfrenta una crisis agrícola global, Cooper, un ex piloto de la NASA, lidera una expedición a través de un agujero de gusano recientemente descubierto en busca de un nuevo hogar para la humanidad. La película explora temas profundos como el amor, la lealtad, el sacrificio y la supervivencia, mientras desafía las fronteras del espacio-tiempo y la comprensión humana. Con impresionantes efectos visuales y una narrativa emocionalmente resonante." },
    { id: 5, id_imagen: 'imagen_padrino', id_clave: 'padrino', id_div: 'texto_fav_padrino', id_des: 'descripcion_fav_padrino', id_quit: 'quitar_padrino', titulo: "El Padrino", descripcion: " AAA El Padrino es una obra maestra del cine dirigida por Francis Ford Coppola, estrenada en 1972, que narra la saga de la familia criminal Corleone en la Nueva York de los años 40 y 50. Basada en la novela de Mario Puzo, la película sigue el ascenso de Michael Corleone, interpretado por Al Pacino, de un hijo ajeno a los negocios familiares a convertirse en el implacable líder de la mafia familiar. Con una narrativa épica, personajes complejos como Don Vito Corleone, interpretado magistralmente por Marlon Brando, y un retrato inmersivo de la cultura italiana americana y el crimen organizado." }
  ];

  ngOnInit(): void {

    this.numero.disparador.subscribe(data => {
      if (data.origen === 'favorito') {
        this.agregarFavorito(data.id);
      } else if (data.origen === 'borrar') {
        this.quitarPelicula(data.id);
      }
    });
  }

  agregarFavorito(id: number): void {
    alert('Su pelicula esta siendo agregada a favoritos');
    of(id).pipe(
      delay(3000), // Simula una operación asíncrona con un retraso de 1 segundo
      tap(() => {
        if (!this.lista.has(id)) {
          this.lista.add(id);
          alert('Esta pelicula se ha agregado a tus favoritos');
        }
      }),
    ).subscribe();
  }


  findPelicula(id: number) {
    return this.lista_peliculas.find(pelicula => pelicula.id === id);
  }

  mostrarPelicula(seccion: any, id: any): void {
    let listaIdDiv = this.lista_peliculas.map(pelicula => pelicula.id_div);

    //this.ocultarPelicula(id)

    listaIdDiv.forEach(imagen => {
      if (imagen === seccion) {
        var abrir = document.getElementById(seccion)
        abrir?.classList.toggle('hidden')
        abrir?.scrollIntoView({ behavior: 'smooth' });
      }
      else {
        var abrir = document.getElementById(imagen)
        abrir?.classList.add('hidden')
      }
    })

  }

  descripcionPelicula(seccion: any, id: any): void {
    let listaIdDes = this.lista_peliculas.map(pelicula => pelicula.id_des);

    listaIdDes.forEach(descripcion => {
      let elemento = document.getElementById(descripcion);
      if (descripcion === seccion) {
        elemento?.classList.toggle('hidden');
        elemento?.scrollIntoView({ behavior: 'smooth' });

      } else {
        elemento?.classList.add('hidden');
      }
    });
  }

  quitarPelicula(id: any): void {

    of(id).pipe(
      delay(3000), // Simula una operación asíncrona con un retraso de 1 segundo
      tap(() => {
        if (this.lista.has(id)) {
          this.lista.delete(id);
          alert('Esta pelicula se ha eliminado de tus favoritos');
        }
      }),
    ).subscribe();
  }




}
