import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Pelicula {
  id: string;
  nombre: string;
  contenido: string;
  director: string;
  escritor: string;
  presupuesto: string;
  recaudacion: string;
  nominaciones: string;
  aprobacion: string;
  reparto1: string;
  reparto1ptr: string;
  reparto1Img: string;
  reparto2: string;
  reparto2ptr: string;
  reparto2Img: string;
  reparto3: string;
  reparto3ptr: string;
  reparto3Img: string;
  reparto4: string;
  reparto4ptr: string;
  reparto4Img: string;
  reparto5: string;
  reparto5ptr: string;
  reparto5Img: string;
  fondo: string;
  foto: string;
}

// Datos de la información detalle de las peliculas
const datosPeliculas = [
  { id: "1", nombre: "Thor 2 - The Dark World", contenido: "Thor (Chris Hemsworth, Star Trek: En la oscuridad, Blancanieves y la leyenda del cazador) se ve obligado a embarcarse en su viaje más peligroso y al mismo tiempo personal, para enfrentarse a un enemigo que ni siquiera Odin (Anthony Hopkins, 360 - Juego de destinos, El rito) y Asgard son capaces de vencer.",
       director: "Alan Taylor", escritor: "Christopher Yost", presupuesto: "152", recaudacion: "+644", nominaciones: "+9", aprobacion: "81%",
       reparto1: "Chris Hemsworth", reparto1ptr: "Thor", reparto1Img: "https://tenor.com/es-419/view/okay-yeah-ok-chris-hemsworth-sure-ok-gif-15747035.gif", 
       reparto2: "Natalie Portman", reparto2ptr: "Jane Foster",reparto2Img: "https://tenor.com/es-419/view/infp-yeah-about-that-gif-25010945.gif", 
       reparto3: "Tom Hiddleston", reparto4ptr: "Loki",reparto4Img: "https://tenor.com/es-419/view/tom-hiddleston-gif-22793598.gif", 
       reparto4: "Idris Elba ", reparto3ptr: "Heimdall",reparto3Img: "https://tenor.com/es-419/view/approve-wink-smile-idris-elba-thumbs-up-gif-7331500.gif", 
       reparto5: "Stellan Skarsgård", reparto5ptr: "Erik Selvig",reparto5Img: "https://tenor.com/es-419/view/hey-wave-hello-whats-up-smile-gif-16099259.gif",
       fondo: "https://tenor.com/es-419/view/thor-mjolnir-cheer-mcu-chris-hemsworth-gif-15698683.gif",
       foto: "./assets/Imagenes/Thor2.jpg"},
  { id: "2", nombre: "Iron Man 3", contenido: "El director Shane Black (Kiss Kiss Bang Bang) nos trae Iron Man 3, la nueva aventura de la saga basada en la conocida serie de cómics de Marvel, en la que el multimillonario Tony Stark/ Iron Man (Robert Downey Jr., Marvel Los Vengadores), vuelve a enfrentarse a las fuerzas del mal con su letal armadura.",
      director: "Shane Black", escritor: "Drew Pearce", presupuesto: "200", recaudacion: "+1.215", nominaciones: "+15", aprobacion: "79%",
       reparto1: "Robert Downey Jr", reparto1ptr: "Iron Man", reparto1Img: "https://tenor.com/es-419/view/rdj-robert-downey-jr-marvel-iron-man-meme-gif-27073496.gif", 
       reparto2: "Gwyneth Paltrow ", reparto2ptr: "Virginia Pepper Potts",reparto2Img: "https://tenor.com/es-419/view/the-politicians-gwyneth-paltrow-jesslookhere-gif-18088452.gif", 
       reparto3: "Don Cheadle", reparto3ptr: "Iron Patriot",reparto3Img: "https://tenor.com/es-419/view/oh-yeah-thats-right-told-you-don-cheadle-nod-gif-16510006.gif", 
       reparto4: "Ben Kingsley ", reparto4ptr: "Mandarin",reparto4Img: "https://tenor.com/es-419/view/iron-man3-action-mandarin-ben-kingsley-gif-3430903.gif", 
       reparto5: "Guy Pearce", reparto5ptr: "Aldrich Killian",reparto5Img: "https://tenor.com/es-419/view/guy-pearce-gaze-look-man-gif-9072163.gif",
       fondo: "https://tenor.com/es-419/view/iron-man-tony-stark-robert-downey-jr-marvel-superhero-gif-16430080.gif",
       foto: "./assets/Imagenes/Iron3.webp"},
  { id: "3", nombre: "Thor", contenido: "Thor (Chris Hemsworth, Los vengadores), príncipe del reino de Asgard, es un poderoso y arrogante guerrero cuya imprudencia desencadena antiguas rencillas en el dominio. Por ello, su padre Odín le envía al planeta Tierra a modo de castigo para que viva como un humano y descubra así el valor de la humildad. ",
       director: "Kenneth Branagh", escritor: "Ashley Edward Miller", presupuesto: "140", recaudacion: "+449", nominaciones: "+23", aprobacion: "77%",
       reparto1: "Chris Hemsworth", reparto1ptr: "Thor", reparto1Img: "https://tenor.com/es-419/view/okay-yeah-ok-chris-hemsworth-sure-ok-gif-15747035.gif", 
       reparto2: "Natalie Portman", reparto2ptr: "Jane Foster",reparto2Img: "https://tenor.com/es-419/view/infp-yeah-about-that-gif-25010945.gif", 
       reparto3: "Tom Hiddleston", reparto4ptr: "Loki",reparto4Img: "https://tenor.com/es-419/view/tom-hiddleston-gif-22793598.gif", 
       reparto4: "Idris Elba ", reparto3ptr: "Heimdall",reparto3Img: "https://tenor.com/es-419/view/approve-wink-smile-idris-elba-thumbs-up-gif-7331500.gif", 
       reparto5: "Stellan Skarsgård", reparto5ptr: "Erik Selvig",reparto5Img: "https://tenor.com/es-419/view/hey-wave-hello-whats-up-smile-gif-16099259.gif",
       fondo: "https://tenor.com/es-419/view/thor-gif-21966792.gif",
       foto: "./assets/Imagenes/Thor1.webp"},
  { id: "4", nombre: "Avengers - Infinity War", contenido: "Un nuevo peligro acecha procedente de las sombras del cosmos. Thanos, el infame tirano intergaláctico, tiene como objetivo reunir las seis Gemas del Infinito, artefactos de poder inimaginable, y usarlas para imponer su perversa voluntad a toda la existencia. Los Vengadores y sus aliados tendrán que luchar contra el mayor villano al que se han enfrentado nunca.",
       director: "Anthony Russo, Joe Russo", escritor: "Christopher Markus", presupuesto: "400", recaudacion: "+2.052", nominaciones: "+25", aprobacion: "85%",
       reparto1: "Robert Downey Jr", reparto1ptr: "Iron Man", reparto1Img: "https://tenor.com/es-419/view/rdj-robert-downey-jr-marvel-iron-man-meme-gif-27073496.gif", 
       reparto2: "Chris Evans", reparto2ptr: "Capitan America",reparto2Img: "https://tenor.com/es-419/view/chris-evans-gif-25053136.gif", 
       reparto3: "Mark Ruffalo", reparto3ptr: "Hulk",reparto3Img: "https://tenor.com/es-419/view/confused-louis-the-adam-project-huh-what-happened-gif-25082710.gif", 
       reparto4: "Tom Hiddleston", reparto4ptr: "Loki",reparto4Img: "https://tenor.com/es-419/view/tom-hiddleston-gif-22793598.gif", 
       reparto5: "Scarlett Johansson", reparto5ptr: "Viuda Negra",reparto5Img: "https://tenor.com/es-419/view/flirt-flirty-gif-27167000.gif",
       fondo: "https://tenor.com/es-419/view/running-flying-avengers-black-panther-captain-america-gif-20283634.gif",
       foto: "./assets/Imagenes/Avengers3.webp"},
  { id: "5", nombre: "Thor - Ragnarok", contenido: "Asgard se encuentra en manos de una poderosa amenaza, la despiadada y todopoderosa Hela (Cate Blanchett), que ha robado el trono y ha encarcelado a Thor (Chris Hemsworth), enviándole como prisionero hasta el otro extremo de la galaxia. Sin su martillo, el mítico y poderoso Mjölnir, el Dios del Trueno se encontrará a sí mismo en una carrera contra el tiempo.",
       director: "Taika Waititi", escritor: "Eric Pearson", presupuesto: "180", recaudacion: "+855", nominaciones: "+25", aprobacion: "93%",
       reparto1: "Chris Hemsworth", reparto1ptr: "Thor", reparto1Img: "https://tenor.com/es-419/view/okay-yeah-ok-chris-hemsworth-sure-ok-gif-15747035.gif", 
       reparto2: "Cate Blanchett", reparto2ptr: "Hela",reparto2Img: "https://tenor.com/es-419/view/cate-blanchett-gif-11226011718104039187.gif", 
       reparto3: "Tom Hiddleston", reparto4ptr: "Loki",reparto4Img: "https://tenor.com/es-419/view/tom-hiddleston-gif-22793598.gif", 
       reparto4: "Idris Elba ", reparto3ptr: "Heimdall",reparto3Img: "https://tenor.com/es-419/view/approve-wink-smile-idris-elba-thumbs-up-gif-7331500.gif", 
       reparto5: "Jeff Goldblum", reparto5ptr: "Erik Selvig",reparto5Img: "https://tenor.com/es-419/view/goldblum-heart-gif-13386722.gif",
       fondo: "https://tenor.com/es-419/view/thor-ragnarok-hulk-thor-valkerie-loki-gif-16648113.gif",
       foto: "./assets/Imagenes/Thor3.webp"},
  { id: "6", nombre: "The Avengers", contenido: "Cuando un enemigo inesperado amenaza la seguridad del planeta y de sus habitantes, Nick Fury (Samuel L. Jackson), director de SHIELD, monta un dispositivo con todos los hombres capaces de preservar a la humanidad del caos. El enemigo es tan poderoso, que necesita que todos los superhéroes luchen juntos y formen un equipo compacto. Ellos serán: el Capitán América (Chris Evans), Thor (Chris Hemsworth), Iron Man (Robert Downey Jr.), Hulk (Mark Ruffalo), Ojo de Halcón (Jeremy Renner) y la Viuda Negra (Scarlett Johansson)",
       director: "Joss Whedon", escritor: "Joss Whedon, Zak Penn", presupuesto: "220", recaudacion: "+1.520", nominaciones: "+15", aprobacion: "91%",
       reparto1: "Robert Downey Jr", reparto1ptr: "Iron Man", reparto1Img: "https://tenor.com/es-419/view/rdj-robert-downey-jr-marvel-iron-man-meme-gif-27073496.gif", 
       reparto2: "Chris Evans", reparto2ptr: "Capitan America",reparto2Img: "https://tenor.com/es-419/view/chris-evans-gif-25053136.gif", 
       reparto3: "Mark Ruffalo", reparto3ptr: "Hulk",reparto3Img: "https://tenor.com/es-419/view/confused-louis-the-adam-project-huh-what-happened-gif-25082710.gif", 
       reparto4: "Tom Hiddleston", reparto4ptr: "Loki",reparto4Img: "https://tenor.com/es-419/view/tom-hiddleston-gif-22793598.gif", 
       reparto5: "Scarlett Johansson", reparto5ptr: "Viuda Negra",reparto5Img: "https://tenor.com/es-419/view/flirt-flirty-gif-27167000.gif",
       fondo: "https://tenor.com/es-419/view/avengers-ready-lets-do-this-iron-man-tony-stark-gif-17148023.gif",
       foto: "./assets/Imagenes/Avengers.png"},
  { id: "7", nombre: "Avengers - Era de Ultrón", contenido: "El destino del planeta pende de un hilo cuando Tony Stark intenta hacer funcionar un inactivo programa para mantener la paz. Las cosas le salen mal y los héroes más poderosos, incluyendo Iron Man, Capitán América, la Viuda Negra, Thor, el Increíble Hulk y Ojo de Halcón, se ven enfrentados a la prueba definitiva.",
       director: "Joss Whedon", escritor: "Joss Whedon", presupuesto: "316", recaudacion: "+1.405", nominaciones: "+28", aprobacion: "75%",
       reparto1: "Robert Downey Jr", reparto1ptr: "Iron Man", reparto1Img: "https://tenor.com/es-419/view/rdj-robert-downey-jr-marvel-iron-man-meme-gif-27073496.gif", 
       reparto2: "Chris Evans", reparto2ptr: "Capitan America",reparto2Img: "https://tenor.com/es-419/view/chris-evans-gif-25053136.gif", 
       reparto3: "Mark Ruffalo", reparto3ptr: "Hulk",reparto3Img: "https://tenor.com/es-419/view/confused-louis-the-adam-project-huh-what-happened-gif-25082710.gif", 
       reparto4: "Tom Hiddleston", reparto4ptr: "Loki",reparto4Img: "https://tenor.com/es-419/view/tom-hiddleston-gif-22793598.gif", 
       reparto5: "Scarlett Johansson", reparto5ptr: "Viuda Negra",reparto5Img: "https://tenor.com/es-419/view/flirt-flirty-gif-27167000.gif",
       fondo: "https://tenor.com/es-419/view/ultron-marvel-robot-artificial-intelligence-avengers-age-of-ultron-gif-16652736.gif",
       foto: "./assets/Imagenes/Avengers2.webp"},
  { id: "8", nombre: "Iron Man", contenido: "Tony Stark (Robert Downey Jr., 'Chaplin'), dueño de Industrias Stark, inventor consagrado, vendedor de armas y playboy multimillonario, es secuestrado en Afganistán después de una demostración armamentística para el Ejército de los Estados Unidos. Forzado por sus captores a fabricar un arma temible, acaba construyendo en secreto una armadura de alta tecnología revolucionaria que usa para escaparse.",
      director: "Jon Favreau", escritor: "Mark Fergus", presupuesto: "140", recaudacion: "+585", nominaciones: "+9", aprobacion: "94%",
      reparto1: "Robert Downey Jr", reparto1ptr: "Iron Man", reparto1Img: "https://tenor.com/es-419/view/rdj-robert-downey-jr-marvel-iron-man-meme-gif-27073496.gif", 
      reparto2: "Gwyneth Paltrow ", reparto2ptr: "Virginia Pepper Potts",reparto2Img: "https://tenor.com/es-419/view/the-politicians-gwyneth-paltrow-jesslookhere-gif-18088452.gif", 
      reparto3: "Don Cheadle", reparto3ptr: "Iron Patriot",reparto3Img: "https://tenor.com/es-419/view/oh-yeah-thats-right-told-you-don-cheadle-nod-gif-16510006.gif", 
      reparto4: "Jeff Bridges ", reparto4ptr: "Iron Monger",reparto4Img: "https://tenor.com/es-419/view/jeff-bridges-the-dude-big-lebowski-stir-gif-12134868.gif", 
      reparto5: "Clark Gregg", reparto5ptr: "Agente Phil Coulson",reparto5Img: "https://tenor.com/es-419/view/captain-marvel-agent-coulson-phil-coulson-clark-gregg-marvel-gif-16091869.gif",
       fondo: "https://tenor.com/es-419/view/donut-iron-man-tony-stark-hungry-bite-gif-15065412.gif",
       foto: "./assets/Imagenes/Iron1.jpg"},
  { id: "9", nombre: "Avengers - End Game", contenido: "Después de los devastadores eventos ocurridos en Vengadores: Infinity War, el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Tras la derrota, las cosas no pintan bien para los Vengadores. Mientras Iron Man (Robert Downey Jr.) vaga en soledad junto a Nebula (Karen Gillan) en una nave lejos de la Tierra, el grupo encabezado por Capitán América (Chris Evans), Viuda Negra (Scarlett Johansson), Hulk (Mark Ruffalo) y Thor (Chris Hemsworth) deberá tratar de revertir los efectos de la catástrofe provocada por Thanos. Los Vengadores deberán reunirse una vez más para deshacer sus acciones y restaurar el orden en el universo de una vez por todas. Esta vez, contarán también con aliados como Ojo de Halcón (Jeremy Renner) y Capitana Marvel (Brie Larson), además de Ant-Man (Paul Rudd), que presumiblemente podría haber estado atrapado en el Reino Cuántico. Juntos, se prepararán para la batalla final, sin importar cuáles sean las consecuencias.",
      director: "Anthony Russo, Joe Russo", escritor: "Christopher Markus", presupuesto: "400", recaudacion: "+2.799", nominaciones: "+35", aprobacion: "94%",
       reparto1: "Robert Downey Jr", reparto1ptr: "Iron Man", reparto1Img: "https://tenor.com/es-419/view/rdj-robert-downey-jr-marvel-iron-man-meme-gif-27073496.gif", 
       reparto2: "Chris Evans", reparto2ptr: "Capitan America",reparto2Img: "https://tenor.com/es-419/view/chris-evans-gif-25053136.gif", 
       reparto3: "Mark Ruffalo", reparto3ptr: "Hulk",reparto3Img: "https://tenor.com/es-419/view/confused-louis-the-adam-project-huh-what-happened-gif-25082710.gif", 
       reparto4: "Tom Hiddleston", reparto4ptr: "Loki",reparto4Img: "https://tenor.com/es-419/view/tom-hiddleston-gif-22793598.gif", 
       reparto5: "Scarlett Johansson", reparto5ptr: "Viuda Negra",reparto5Img: "https://tenor.com/es-419/view/flirt-flirty-gif-27167000.gif",
       fondo: "https://tenor.com/es-419/view/avengers-running-lets-do-this-gif-19919029.gif",
       foto: "./assets/Imagenes/Avengers4.png"},
  { id: "10", nombre: "Iron Man 2", contenido: "Después de los sucesos ocurridos en Iron Man (2008), el mundo entero sabe que Tony Stark (Robert Downey Jr.) es el superhéroe enmascarado conocido como Iron Man. Tanto el gobierno, como la prensa y la opinión pública están haciendo campaña a favor de que Stark comparta su tecnología con el ejército, pero el creador de las Industrias Stark se niega a compartir sus secretos por el temor a que sus diseños caigan en manos de personas poco adecuadas y peligrosas.",
       director: "Jon Favreau", escritor: "Justin Theroux", presupuesto: "200", recaudacion: "+623", nominaciones: "+12", aprobacion: "72%",
       reparto1: "Robert Downey Jr", reparto1ptr: "Iron Man", reparto1Img: "https://tenor.com/es-419/view/rdj-robert-downey-jr-marvel-iron-man-meme-gif-27073496.gif", 
       reparto2: "Gwyneth Paltrow ", reparto2ptr: "Virginia Pepper Potts",reparto2Img: "https://tenor.com/es-419/view/the-politicians-gwyneth-paltrow-jesslookhere-gif-18088452.gif", 
       reparto3: "Don Cheadle", reparto3ptr: "Iron Patriot",reparto3Img: "https://tenor.com/es-419/view/oh-yeah-thats-right-told-you-don-cheadle-nod-gif-16510006.gif", 
       reparto4: "Scarlett Johansson", reparto4ptr: "Viuda Negra",reparto4Img: "https://tenor.com/es-419/view/flirt-flirty-gif-27167000.gif",
       reparto5: "Mickey Rourke", reparto5ptr: "Agente Phil Coulson",reparto5Img: "https://tenor.com/es-419/view/taking-shades-off-mickey-rourke-gary-night-walk-let-me-tell-you-something-gif-21415520.gif",
       fondo: "https://tenor.com/es-419/view/iron-man-and-war-machine-mask-on-gif-marvel-iron-man-war-machine-lets-go-gif-17879708.gif",
       foto: "./assets/Imagenes/Iron2.jpg"},
];


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public id: string= '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    }
  );

  const pelicula: Pelicula | undefined = datosPeliculas.find(tarjeta => tarjeta.id === this.id);
  const panel = document.querySelector('.panel') as HTMLElement;
  panel.style.backgroundImage = `url(${pelicula.fondo})`;

  //Carga foto
  const foto = document.getElementById('foto-pelicula');
  foto.setAttribute('href', pelicula.foto);

  //Carga Titulo de la pelicula
  const titulo = document.getElementById('pelicula').querySelector('h2');
  titulo.textContent = pelicula.nombre;

  //Carga Descripción de la pelicula
  const contenido = document.getElementById('contenido');
  contenido.textContent = pelicula.contenido;

  //Carga Director de la pelicula
  const director = document.getElementById('director');
  director.textContent += pelicula.director;

  //Carga Escritor/es de la pelicula
  const escritor = document.getElementById('escritor');
  escritor.textContent += pelicula.escritor;

  //Carga Presupuesto de la pelicula
  const presupuesto = document.getElementById('presupuesto');
  presupuesto.textContent = pelicula.presupuesto;

  //Carga recaudacion de la pelicula
  const recaudacion = document.getElementById('recaudacion');
  recaudacion.textContent = pelicula.recaudacion;

  //Carga nominaciones de la pelicula
  const nominaciones = document.getElementById('nominaciones');
  nominaciones.textContent = pelicula.nominaciones;

  //Carga aprobacion de la pelicula
  const aprobacion = document.getElementById('aprobacion');
  aprobacion.textContent = pelicula.aprobacion;

  //Carga los datos del reparto
  const reparto1 = document.querySelector('.reparto-1')as HTMLElement;
  reparto1.style.backgroundImage = `url(${pelicula.reparto1Img})`;
  const repartoNombre1 = reparto1.querySelector('h3');
  repartoNombre1.textContent = pelicula.reparto1;
  const repartoPtr1 = reparto1.querySelector('p');
  repartoPtr1.textContent = pelicula.reparto1ptr;

  const reparto2 = document.querySelector('.reparto-2')as HTMLElement;
  reparto2.style.backgroundImage = `url(${pelicula.reparto2Img})`;
  const repartoNombre2 = reparto2.querySelector('h3');
  repartoNombre2.textContent = pelicula.reparto2;
  const repartoPtr2 = reparto2.querySelector('p');
  repartoPtr2.textContent = pelicula.reparto2ptr;

  const reparto3 = document.querySelector('.reparto-3')as HTMLElement;
  reparto3.style.backgroundImage = `url(${pelicula.reparto3Img})`;
  const repartoNombre3 = reparto3.querySelector('h3');
  repartoNombre3.textContent = pelicula.reparto3;
  const repartoPtr3 = reparto3.querySelector('p');
  repartoPtr3.textContent = pelicula.reparto3ptr;

  const reparto4 = document.querySelector('.reparto-4')as HTMLElement;
  reparto4.style.backgroundImage = `url(${pelicula.reparto4Img})`;
  const repartoNombre4 = reparto4.querySelector('h3');
  repartoNombre4.textContent = pelicula.reparto4;
  const repartoPtr4 = reparto4.querySelector('p');
  repartoPtr4.textContent = pelicula.reparto4ptr;

  }

}
