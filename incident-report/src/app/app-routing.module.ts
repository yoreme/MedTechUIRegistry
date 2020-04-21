import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreateIncidentComponent} from './create-incident/create-incident.component';
import {AllIncidentComponent} from './all-incident/all-incident.component';
import {MainCategoriesComponent} from './main-categories/main-categories.component';
import { MedChifeMainComponent} from './med-chife-main/med-chife-main.component'

const routes: Routes = [
  {path: '', component: MainCategoriesComponent},
  {path: 'create', component: CreateIncidentComponent},
  {path: 'create/all-incidents', component: AllIncidentComponent},
  {path: 'all-incidents', component: AllIncidentComponent},
  {path: 'medchife', component: MedChifeMainComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
