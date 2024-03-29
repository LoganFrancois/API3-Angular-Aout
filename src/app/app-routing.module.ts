import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMenuComponent} from "./components/main-menu/main-menu.component";
import {EmployesComponent} from "./components/employes/employes.component";
import {ProjetsComponent} from "./components/projets/projets.component";
import {NewemployeComponent} from "./components/newemploye/newemploye.component";
import {UpdateemployeComponent} from "./components/updateemploye/updateemploye.component";
import {ExamenComponent} from "./components/examen/examen.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employes', component: EmployesComponent},
  {path: 'projets', component: ProjetsComponent},
  {path: 'newEmploye', component: NewemployeComponent},
  {path: 'updateemploye/:idemploye', component: UpdateemployeComponent},
  {path: 'examen',component:ExamenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
