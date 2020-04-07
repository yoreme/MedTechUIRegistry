import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainCategoriesComponent } from './main-categories/main-categories.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { AllIncidentComponent } from './all-incident/all-incident.component';
import { IncidentApiService } from './incident-api.service';
import {IncidentListComponent} from './incident-list/incident-list.component';
import {IncidentDetailsComponent} from './incident-details/incident-details.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCategoriesComponent,
    CreateIncidentComponent,
    AllIncidentComponent,
    IncidentDetailsComponent,
    IncidentListComponent,
    IncidentFormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    IncidentApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
