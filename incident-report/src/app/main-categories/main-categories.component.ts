import { Component, OnInit } from '@angular/core';
import { faHospitalUser, faUserInjured, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css']
})
export class MainCategoriesComponent implements OnInit {

  faHospitalUser = faHospitalUser;
  faUserInjured = faUserInjured;
  faMapMarkedAlt = faMapMarkedAlt;

  btnClicked = function () {
    console.log("i have been clicked")
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
