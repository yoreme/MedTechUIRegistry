import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentApiService {

  baseUrl = 'http://localhost:8000/incident/api/v1/incidents';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  //  Authorization: 'Token xxxx'
  })

  private incidents = ['sick patient', 'broken pipe', 'new list'];
  constructor(
    private httpClient: HttpClient
  ) { }

  getIncidents() {
    return this.httpClient.get(this.baseUrl, {headers: this.headers});
  }
}
