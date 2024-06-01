import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


interface Tarjeta {
  id: number;
  nombre: string;
  contenido: string;
  tiempo: string;
  imagen: string;
  fecha: string;
}

const datosTarjetas: Tarjeta[] = [
  { id: 1, nombre: "Thor 2 - The Dark World", contenido: "Malekith, un enemigo más antiguo que el universo, regresa a la Tierra para cumplir su plan destructor.", tiempo: "112 mins", imagen: "./assets/Imagenes/Thor2.jpg", fecha: "08/11/2013" },
  { id: 2, nombre: "Iron Man 3", contenido: "El brillante Tony Stark, tras ver destruido todo su universo personal, debe encontrar y enfrentarse a un enemigo cuyo poder no conoce límites.", tiempo: "131 mins", imagen: "./assets/Imagenes/Iron3.webp", fecha: "03/05/2013" },
  { id: 3, nombre: "Thor", contenido: "Thor es desterrado a la Tierra por su padre para que viva entre los hombres y descubra así el verdadero sentido de la humildad.", tiempo: "115 mins", imagen: "./assets/Imagenes/Thor1.webp", fecha: "06/05/2011" },
  { id: 4, nombre: "Avengers - Infinity War", contenido: "Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado.", tiempo: "149 mins", imagen: "./assets/Imagenes/Avengers3.webp", fecha: "04/05/2012" },
  { id: 5, nombre: "Thor - Ragnarok", contenido: "Thor está preso en el otro extremo del universo. Necesita regresar a tiempo para evitar que la todopoderosa Hela destruya su mundo.", tiempo: "130 mins", imagen: "./assets/Imagenes/Thor3.webp", fecha: "03/11/2017" },
  { id: 6, nombre: "Avengers", contenido: "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro.", tiempo: "143 mins", imagen: "./assets/Imagenes/Avengers.png", fecha: "04/05/2012" },
  { id: 7, nombre: "Avengers - Era de Ultrón", contenido: "Los Vengadores se reúnen de nuevo y juntan sus fuerzas con las de los recién llegados Quicksilver y Bruja Escarlata.", tiempo: "141 mins", imagen: "./assets/Imagenes/Avengers2.webp", fecha: "01/05/2015" },
  { id: 8, nombre: "Iron Man", contenido: "Un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo.", tiempo: "126 mins", imagen: "./assets/Imagenes/Iron1.jpg", fecha: "02/05/2008" },
  { id: 9, nombre: "Avengers - End Game", contenido: "Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos.", tiempo: "181 mins", imagen: "./assets/Imagenes/Avengers4.png", fecha: "26/05/2019" },
  { id: 10, nombre: "Iron Man 2", contenido: "Con el mundo consciente de que él es Iron Man, el millonario Tony Stark debe confrontar a un enemigo nuevo y poderoso.", tiempo: "124 mins", imagen: "./assets/Imagenes/Iron2.jpg", fecha: "07/05/2010" },
];

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) {}

  ngOnInit() {
    this.mostrarTarjetas(datosTarjetas);

    (document.getElementById("buscador") as HTMLInputElement).addEventListener("input", () => this.filtrarTarjetas());
    (document.getElementById("logo_img") as HTMLElement).addEventListener("click", () => {
      window.location.href = "../HTML/Index.html";
    });
    (document.getElementById("aleatorio") as HTMLElement).addEventListener("click", () => this.ordenarTarjetasAleatorio());
    (document.getElementById("nombre") as HTMLElement).addEventListener("click", () => this.ordenarTarjetasNombre());
    (document.getElementById("fecha") as HTMLElement).addEventListener("click", () => this.ordenarTarjetasFecha());
  }

  mostrarTarjetas(tarjetas: Tarjeta[]): void {
    const contenedorTarjetas = this.el.nativeElement.querySelector("#contenedor-tarjetas");
    contenedorTarjetas.innerHTML = "";

    tarjetas.forEach(tarjeta => {
      const tarjetaHTML = 
        `<div class="col-auto">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="300" role="img" focusable="false" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <image href="${tarjeta.imagen}" width="100%" height="100%" />
            </svg>
            <div class="card-body">
              <h5 class="card-title">${tarjeta.nombre}</h5>
              <p class="card-text">${tarjeta.contenido}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary info-btn" data-id="${tarjeta.id}">Info +</button>
                </div>
                <small class="text-muted">Duración: ${tarjeta.tiempo}</small>
                <small class="text-muted">Estreno: ${tarjeta.fecha}</small>
              </div>
            </div>
          </div>
        </div>`;
      contenedorTarjetas.innerHTML += tarjetaHTML;
    });

    document.querySelectorAll('.info-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        this.mostrarInformacion((event.target as HTMLButtonElement).getAttribute('data-id'));
      });
    });
  }

  filtrarTarjetas(): void {
    const filtro = (document.getElementById("buscador") as HTMLInputElement).value.toLowerCase();
    const idFiltros = document.getElementById("Filtros") as HTMLElement;

    if (filtro === "") {
      idFiltros.style.display = "block";
      this.ordenarTarjetasAleatorio();
    } else {
      idFiltros.style.display = "none";
    }

    const tarjetasFiltradas = datosTarjetas.filter(tarjeta =>
      tarjeta.nombre.toLowerCase().includes(filtro)
    );
    this.mostrarTarjetas(tarjetasFiltradas);
  }

  ordenarTarjetasAleatorio(): void {
    // Lógica de ordenamiento aleatorio
    this.mostrarTarjetas(datosTarjetas);

    const btn_nombre = document.getElementById("nombre");
    if (btn_nombre.classList.contains('btn-info')) {
        btn_nombre.classList.remove('btn-info');
        btn_nombre.classList.add('btn-transparent');
    }
    const btn_aleatorio = document.getElementById("aleatorio");
    if (btn_aleatorio.classList.contains('btn-transparent')) {
        btn_aleatorio.classList.remove('btn-transparent');
        btn_aleatorio.classList.add('btn-info');
    }
    const btn_fecha = document.getElementById("fecha");
    if (btn_fecha.classList.contains('btn-info')) {
        btn_fecha.classList.remove('btn-info');
        btn_fecha.classList.add('btn-transparent');
    }
  }

  ordenarTarjetasNombre(): void {
    const tarjetasOrdenadasPorNombre = datosTarjetas.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
    this.mostrarTarjetas(tarjetasOrdenadasPorNombre);

    const btn_aleatorio = document.getElementById("aleatorio");
    if (btn_aleatorio.classList.contains('btn-info')) {
        btn_aleatorio.classList.remove('btn-info');
        btn_aleatorio.classList.add('btn-transparent');
    }
    const btn_nombre = document.getElementById("nombre");
    if (btn_nombre.classList.contains('btn-transparent')) {
        btn_nombre.classList.remove('btn-transparent');
        btn_nombre.classList.add('btn-info');
    }
    const btn_fecha = document.getElementById("fecha");
    if (btn_fecha.classList.contains('btn-info')) {
        btn_fecha.classList.remove('btn-info');
        btn_fecha.classList.add('btn-transparent');
    }
  }

  ordenarTarjetasFecha(): void {
    const tarjetasOrdenadasPorFecha = datosTarjetas.slice().sort((a, b) => {
      const fechaA = new Date(a.fecha).getTime();
      const fechaB = new Date(b.fecha).getTime();
      return fechaA - fechaB;
    });
    this.mostrarTarjetas(tarjetasOrdenadasPorFecha);

    const btn_aleatorio = document.getElementById("aleatorio");
    if (btn_aleatorio.classList.contains('btn-info')) {
        btn_aleatorio.classList.remove('btn-info');
        btn_aleatorio.classList.add('btn-transparent');
    }
    const btn_fecha = document.getElementById("fecha");
    if (btn_fecha.classList.contains('btn-transparent')) {
        btn_fecha.classList.remove('btn-transparent');
        btn_fecha.classList.add('btn-info');
    }
    const btn_nombre = document.getElementById("nombre");
    if (btn_nombre.classList.contains('btn-info')) {
        btn_nombre.classList.remove('btn-info');
        btn_nombre.classList.add('btn-transparent');
    }
  }

  mostrarInformacion(idTarjeta: string): void {
    console.log(idTarjeta);
    this.router.navigate(['/detalle', idTarjeta]);
  }

}

