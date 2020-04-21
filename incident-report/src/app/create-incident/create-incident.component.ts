import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IncidentApiService } from '../incident-api.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css']
})
export class CreateIncidentComponent implements OnInit {

  
  incidentType = "non";
  dateChange: any;

  // incidentForm = new FormGroup ({
  //   personalNumber: new FormControl (''),
  //   place: new FormControl (''),
  //   description: new FormControl (''),
  //   incident_type: new FormControl(this.incidentType),
  //   incident_date: new FormControl((new Date()).toISOString()),
  //   action: new FormControl(''),
  //   patient_firstname: new FormControl(''),
  //   patient_lastname: new FormControl(''),
  //   patient_sex: new FormControl('')

  // })

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  newIncidentForm: FormGroup;

  personalNumberCtrl = new FormControl ('');
  placeCtrl = new FormControl ('');
  descriptionCtrl =  new FormControl ('');
  incident_typeCtrl = new FormControl(this.incidentType);
  incident_dateCtrl =  new FormControl((new Date()).toISOString());
  actionCtrl =  new FormControl('');
  suggestionCtrl = new FormControl('');
  patient_firstnameCtrl = new FormControl('');
  patient_lastnameCtrl = new FormControl('');
  patient_sexCtrl = new FormControl('');
  
  

  isChecked = true;
  selected = 'option1';

  serializedDate = new FormControl((new Date()).toISOString());
  date = new FormControl(new Date());
  

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

    this.newIncidentForm = this._formBuilder.group({
      personalNumber: this.personalNumberCtrl,
      place: this.placeCtrl,
      description: this.descriptionCtrl,
      incident_type: this.incident_typeCtrl,
      incident_date: this.incident_dateCtrl,
      action: this.actionCtrl,
      suggestion: this.suggestionCtrl,
      patient_firstname: this.patient_firstnameCtrl,
      patient_lastname: this.patient_firstnameCtrl,
      patient_sex: this.patient_sexCtrl,
    });
  }

  onChange($event) {
    console.log($event.value)
  }

  onActionChange($event) {
    this.incidentType = $event.value;
    console.log(this.incidentType)
  }

  OnDateChange(event: MatDatepickerInputEvent<Date>) {
    this.dateChange = event.value;
    console.log(this.serializedDate.value._d)
    
  }

  sendForm = () => {
    console.log(this.newIncidentForm)
    this.apiService.createIncidents(this.newIncidentForm).subscribe(
      result => {
        console.log(result);
      }, error => console.log(error)
    );
   // console.log(this.incidentForm.value);
  }

}
