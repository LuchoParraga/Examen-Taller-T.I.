import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votos',
  templateUrl: './votos.component.html',
  styleUrls: ['./votos.component.scss']
})
export class VotosComponent implements OnInit {
  public listaVotantes = [];
  public limiteVotos;
  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';

  constructor() {
    this.listaVotantes = votantes;
    this.limiteVotos = 50;
   }

  ngOnInit() {
    console.log(votantes);
    this.actualizar_grafica ();
  }

  actualizar_grafica() {
    this.doughnutChartData = [];
    this.doughnutChartLabels = [];
    this.listaVotantes.forEach(candidato => {
      this.doughnutChartLabels.push (candidato.Nombre);
      this.doughnutChartData.push (candidato.Cantidad_de_votos);
    } );
  }

  click_votar(id) {
    if (this.limiteVotos === 0 ) {
      alert('Se alconzo el limite de votos');
    } else {
      this.listaVotantes.forEach(candidato => {
        if (id === candidato.id && this.limiteVotos > 0) {
          console.log(candidato);
          candidato.Cantidad_de_votos = candidato.Cantidad_de_votos + 1;
          candidato.Porcentaje_de_votos = (100 * candidato.Cantidad_de_votos) / 50;
          this.limiteVotos = this.limiteVotos - 1;
          console.log(this.limiteVotos);
          this.actualizar_grafica();
        }
      });
    }
  }

}

const votantes = [
  {
    id: 1,
    Nombre: 'Mariano Melgarejo',
    Cantidad_de_votos: 0,
    Porcentaje_de_votos: 0.0,
    Imagen: '../../assets/Melgarejo.jpg',
  },
  {
    id: 2,
    Nombre: 'Jose Ballivian',
    Cantidad_de_votos: 0,
    Porcentaje_de_votos: 0.0,
    Imagen: '../../assets/Ballivian.jpg',
  },
  {
    id: 3,
    Nombre: 'Jose Maria Linares',
    Cantidad_de_votos: 0,
    Porcentaje_de_votos: 0.0,
    Imagen: '../../assets/Linares.jpg',
  },
];
