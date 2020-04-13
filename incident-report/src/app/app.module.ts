import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';


import { AppComponent } from './app.component';
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
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule
  ],
  providers: [
    IncidentApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
