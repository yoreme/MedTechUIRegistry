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
    const body = JSON.stringify({place: createIncident.value.place, 
      personal_number: createIncident.value.personalNumber,
      description: createIncident.value.description,
      action: createIncident.value.action
    });
    return this.httpClient.post(`${this.baseUrl}create/`, body, {headers: this.headers});
  }
}
