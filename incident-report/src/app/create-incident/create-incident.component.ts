import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IncidentApiService } from '../incident-api.service';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css']
})
export class CreateIncidentComponent implements OnInit {

  incidentForm = new FormGroup ({
    personalNumber: new FormControl (''),
    place: new FormControl (''),
    description: new FormControl (''),
    action: new FormControl('')

  })

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(
    private apiService: IncidentApiService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  sendForm = () => {
    this.apiService.createIncidents(this.incidentForm).subscribe(
      result => {
        console.log(result);
      }, error => console.log(error)
    );
   // console.log(this.incidentForm.value);
  }

}
