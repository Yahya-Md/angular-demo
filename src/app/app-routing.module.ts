import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartementComponent} from './departement/departement.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DepartementDetailsComponent} from './departement/departement-details/departement-details.component';

const routes: Routes = [
  {path: "", redirectTo: "/departement", pathMatch: 'full'},
  {path:"departement", component: DepartementComponent},
  {path:"departement/:code", component: DepartementDetailsComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
