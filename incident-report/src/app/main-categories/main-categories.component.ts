import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css']
})
export class MainCategoriesComponent implements OnInit {

  btnClicked = function () {
    console.log("i have been clicked")
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
