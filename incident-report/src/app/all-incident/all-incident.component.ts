import { Component, OnInit} from '@angular/core';
import { IncidentApiService } from '../incident-api.service';

@Component({
  selector: 'app-all-incident',
  templateUrl: './all-incident.component.html',
  styleUrls: ['./all-incident.component.css']
})
export class AllIncidentComponent implements OnInit {

  incidents: any = [];
  selectedIncident = null;

  constructor(
    private apiService: IncidentApiService
  ) { }

  ngOnInit() {
    this.apiService.getIncidents().subscribe(
      data => {
        this.incidents = data;
      },
      error => console.log(error)
    )
  }

  selectIncident(incident) {
    this.selectedIncident = incident;
    console.log('SelectedIncident', this.selectedIncident );
  }

}
