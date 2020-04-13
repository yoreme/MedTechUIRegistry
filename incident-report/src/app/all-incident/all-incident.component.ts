import { Component, OnInit} from '@angular/core';
import { IncidentApiService } from '../incident-api.service';
import { faExclamationTriangle, faSpinner, faSync, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-incident',
  templateUrl: './all-incident.component.html',
  styleUrls: ['./all-incident.component.css']
})
export class AllIncidentComponent implements OnInit {

  incidents: any = [];
  selectedIncident = null;

  faExclamationTriangle = faExclamationTriangle;
  faSpinner = faSpinner;
  faSync = faSync;
  faCheckCircle = faCheckCircle;

  constructor(
    private apiService: IncidentApiService
  ) { }

  ngOnInit() {
    this.apiService.getIncidents().subscribe(
      data => {
        this.incidents = data;
        this.incidents = this.incidents.results
        console.log(this.incidents)
      },
      error => console.log(error)
    )
  }

  selectIncident(incident) {
    this.selectedIncident = incident;
    console.log('SelectedIncident', this.selectedIncident );
  }

}
