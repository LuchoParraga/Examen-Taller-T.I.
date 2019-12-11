import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  nombres: string;
  apellidos: string;
  telefono: number;
  edad: number;

  constructor() { }

  ngOnInit() {
  }

}
