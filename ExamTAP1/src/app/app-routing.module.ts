import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotosComponent } from './votos/votos.component';


const routes: Routes = [
  {
    path: '',
    component: VotosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
