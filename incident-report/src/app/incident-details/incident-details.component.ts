import { Component, OnInit, Input,  } from '@angular/core';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.css']
})
export class IncidentDetailsComponent implements OnInit {

  faMugHot = faMugHot;

  @Input() incident;
  
  constructor() { }

  ngOnInit(): void {
  }

}
