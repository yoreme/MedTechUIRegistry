import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentApiService {

  //baseUrl = 'http://localhost:8000/incident/api/v1/incidents';
  baseUrl = 'http://localhost:8000/incidents/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    //'X-CSRFToken': 'iuVP0VTBzr7Te3uojRAzY4oLd7pT8UsIYqU8VtIQlnKOEWyKJSfpESduiOWKgZwF',
    'accept': 'application/json'
  //  Authorization: 'Token xxxx'
  })

  private incidents = ['sick patient', 'broken pipe', 'new list'];
  constructor(
    private httpClient: HttpClient
  ) { }

  getIncidents() {
    return this.httpClient.get(`${this.baseUrl}list`, {headers: this.headers});
  }

  createIncidents(createIncident){
    console.log(createIncident.value.personalNumber)
    const body = JSON.stringify({
      place: createIncident.value.place, 
      personal_number: createIncident.value.personalNumber,
      patient_firstname: createIncident.value.patient_firstname,
      patient_lastname: createIncident.value.patient_lastname,
      suggestion: createIncident.value.suggestion,
      description: createIncident.value.description,
      action: createIncident.value.action,
      incident_type: createIncident.value.incident_type,
      incident_date: createIncident.value.incident_date,
      patient_sex: createIncident.value.patient_sex,

    });
    return this.httpClient.post(`${this.baseUrl}create/`, body, {headers: this.headers});
  }
}
