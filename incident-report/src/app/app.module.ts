import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainCategoriesComponent } from './main-categories/main-categories.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { AllIncidentComponent } from './all-incident/all-incident.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCategoriesComponent,
    CreateIncidentComponent,
    AllIncidentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
