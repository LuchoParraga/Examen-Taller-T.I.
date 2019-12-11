import { Component, ViewChild } from '@angular/core';
import { PersonaComponent } from './persona/persona.component';
import { UsuarioComponent } from './usuario/usuario.component';
import PersonaModel from './models/persona.model';
import UsuarioModel from './models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  personaLista = [];

  @ViewChild (PersonaComponent, {static: false}) persona: PersonaComponent;
  @ViewChild (UsuarioComponent, {static: false}) usuario: UsuarioComponent;

  title = 'ExamTAP2';

  guardar() {
    // console.log(this.persona);
    let p = new PersonaModel();
    p.Nombres = this.persona.nombres;
    p.Apellidos = this.persona.apellidos;
    p.Telefono = this.persona.telefono;
    p.Edad = this.persona.edad;
    let u = new UsuarioModel();
    u.correo = this.usuario.correo;
    u.password = this.usuario.password;
    p.usuarioModel = u ;
    console.log(p);
    this.personaLista.push(p);
  }

}
