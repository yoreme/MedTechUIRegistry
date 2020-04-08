import { Component, OnInit } from '@angular/core';
import { faUser, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUser = faUser;
  faBell = faBell;

  constructor() { }

  ngOnInit(): void {
  }

}
