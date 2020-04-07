import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {

  @Input() incidents: any = []
  @Output() selectIncident = new EventEmitter();

  constructor() { }


  ngOnInit(): void {}
  
  incidentClicked(incident) {
    this.selectIncident.emit(incident);
  }
}
