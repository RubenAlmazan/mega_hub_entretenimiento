import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from '../favoritos/favoritos.component';
import { PeliculaService } from '../../pelicula.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FavoritosComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})

export class CatalogoComponent {

  mostrarPelicula(seccion: string, id: number): void {
    let listaIdDiv = this.peliculas.map(pelicula => pelicula.id_div);

    this.ocultarPelicula(id)

    listaIdDiv.forEach(imagen => {
      if (imagen === seccion) {
        var abrir = document.getElementById(imagen)
        abrir?.classList.toggle('hidden')
        abrir?.scrollIntoView({ behavior: 'smooth' });

      }
      else {
        var abrir = document.getElementById(imagen)
        abrir?.classList.add('hidden')
      }
    })

  }

  descripcionPelicula(seccion: string, id: number): void {

    let listaIdDes = this.peliculas.map(pelicula => pelicula.id_des);

    let detalleOcultado = this.peliculas.find(pelicula => pelicula.id === id);

    if (detalleOcultado) {

      listaIdDes.forEach(descripcion => {
        if (descripcion === seccion) {
          var abrir = document.getElementById(descripcion)
          abrir?.classList.toggle('hidden')
          abrir?.scrollIntoView({ behavior: 'smooth' });

          var abrir = document.getElementById(detalleOcultado.id_quit)
          abrir?.classList.add('hidden')
        }
        else {
          var abrir = document.getElementById(descripcion)
          abrir?.classList.add('hidden')
        }
      })
    }
  }


  quitarPelicula(seccion: string, id:number): void {
    let listaIdQuit = this.peliculas.map(pelicula => pelicula.id_quit);

    let detalleOcultado = this.peliculas.find(pelicula => pelicula.id === id);

    if (detalleOcultado) {
      listaIdQuit.forEach(quitar => {
        if (quitar === seccion) {
          var abrir = document.getElementById(quitar)
          abrir?.classList.toggle('hidden')
          abrir?.scrollIntoView({ behavior: 'smooth' });

          var abrir = document.getElementById(detalleOcultado.id_des)
          abrir?.classList.add('hidden')
        }
        else {
          var abrir = document.getElementById(quitar)
          abrir?.classList.add('hidden')
        }
      })
    }

  }

  borrarPelicula(idPelicula: number): void {
    setTimeout(() => {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.id !== idPelicula);
      this.numero.disparador.emit({ origen: 'borrar', id: idPelicula });
      alert('Se ha eliminado la pelicula');
      
    }, 3000);

  }

  ocultarPelicula(idPelicula: number): void {
    let peliculasOcultadas = this.peliculas.filter(pelicula => pelicula.id !== idPelicula);

    peliculasOcultadas.forEach(pelicula => {
      var abrir = document.getElementById(pelicula.id_div)
      abrir?.classList.add('hidden')
      var abrir = document.getElementById(pelicula.id_des)
      abrir?.classList.add('hidden')
      var abrir = document.getElementById(pelicula.id_quit)
      abrir?.classList.add('hidden')
    });


  }


  peliculas = [
    { id: 1, id_imagen: 'imagen_anillo', id_clave: 'anillo', id_div: 'texto_anillo', id_des: 'descripcion_anillo', id_quit: 'quitar_anillo', titulo: "El Señor de los anillos", descripcion:" El Señor de los Anillos es una épica saga basada en la obra literaria de J.R.R. Tolkien. Dirigida por Peter Jackson, la trilogía sigue la odisea de un grupo diverso de personajes en su lucha contra las fuerzas oscuras de Sauron. Ambientada en el mundo ficticio de la Tierra Media, la historia abarca desde la búsqueda de un anillo mágico hasta la batalla épica por la supervivencia de la humanidad. Ofrece una mezcla de aventura, amistad, traición y heroísmo en un entorno rico en mitología y personajes memorables." },
    { id: 2, id_imagen: 'imagen_avatar', id_clave: 'avatar', id_div: 'texto_avatar', id_des: 'descripcion_avatar', id_quit: 'quitar_avatar', titulo: "Avatar", descripcion:"Avatar es una película de ciencia ficción dirigida por James Cameron, ambientada en el exuberante mundo de Pandora en el año 2154. La historia sigue a Jake Sully, un exmarine parapléjico que, a través del programa Avatar, controla un cuerpo híbrido humano-Na'vi para infiltrarse en la comunidad indígena de Pandora. Mientras se integra en su cultura y se enamora de Neytiri, una guerrera Na'vi, Jake empieza a cuestionar las intenciones de los humanos que buscan explotar los recursos del planeta. Con innovadores efectos visuales y un potente mensaje sobre la protección ambiental y elrespeto a las culturas indígenas."},
    { id: 3, id_imagen: 'imagen_fiction', id_clave: 'fiction', id_div: 'texto_fiction', id_des: 'descripcion_fiction', id_quit: 'quitar_fiction', titulo: "Pulp Fiction", descripcion:"Pulp Fiction es una película de culto dirigida por Quentin Tarantino, estrenada en 1994, que entrelaza varias historias de personajes del submundo criminal de Los Ángeles. Con un elenco estelar que incluye a John Travolta, Uma Thurman, Samuel L. Jackson y Bruce Willis, la película se distingue por su estructura narrativa no lineal, diálogos ingeniosos y escenas icónicas. Las tramas, que giran en torno a dos sicarios, un boxeador, la esposa de un gánster y dos delincuentes menores, se cruzan de maneras inesperadas, ofreciendo una mezcla de humor negro, violencia y redención."},
    { id: 4, id_imagen: 'imagen_inter', id_clave: 'inter', id_div: 'texto_inter', id_des: 'descripcion_inter', id_quit: 'quitar_inter', titulo: "Interstellar", descripcion:"Interestelar es una epopeya de ciencia ficción dirigida por Christopher Nolan, estrenada en 2014, que sigue a un grupo de exploradores espaciales en una misión desesperada por salvar a la humanidad. En un futuro distópico donde la Tierra enfrenta una crisis agrícola global, Cooper, un ex piloto de la NASA, lidera una expedición a través de un agujero de gusano recientemente descubierto en busca de un nuevo hogar para la humanidad. La película explora temas profundos como el amor, la lealtad, el sacrificio y la supervivencia, mientras desafía las fronteras del espacio-tiempo y la comprensión humana. Con impresionantes efectos visuales y una narrativa emocionalmente resonante."},
    { id: 5, id_imagen: 'imagen_padrino', id_clave: 'padrino', id_div: 'texto_padrino', id_des: 'descripcion_padrino', id_quit: 'quitar_padrino', titulo: "El Padrino", descripcion:"El Padrino es una obra maestra del cine dirigida por Francis Ford Coppola, estrenada en 1972, que narra la saga de la familia criminal Corleone en la Nueva York de los años 40 y 50. Basada en la novela de Mario Puzo, la película sigue el ascenso de Michael Corleone, interpretado por Al Pacino, de un hijo ajeno a los negocios familiares a convertirse en el implacable líder de la mafia familiar. Con una narrativa épica, personajes complejos como Don Vito Corleone, interpretado magistralmente por Marlon Brando, y un retrato inmersivo de la cultura italiana americana y el crimen organizado."}
  ];

  
  constructor(private numero:PeliculaService ) {}
  peliculaFavorita(dato: number): void{
    this.numero.disparador.emit({ origen: 'favorito', id: dato });
  }





}
