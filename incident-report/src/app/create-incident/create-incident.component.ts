import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css']
})
export class CreateIncidentComponent implements OnInit {

  incidentForm = new FormGroup ({
    personalNumber: new FormControl (''),
    place: new FormControl ('')

  })

  constructor() { }

  ngOnInit(): void {
  }

  sendForm = () => {
    console.log(this.incidentForm.value);
  }

}
