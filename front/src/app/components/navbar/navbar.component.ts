import { Component, OnInit, ElementRef } from "@angular/core";
// import { ROUTES } from "../sidebar/sidebar.component";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from "@angular/common";
import { appService } from 'src/app/services/app.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  public location: Location;
  userName: string = window.localStorage.getItem('first_name');

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private appService: appService
  ) {}

  ngOnInit() {
  }


  logout() {
    this.appService.logout();
    this.router.navigate(['login']);
  }
}
