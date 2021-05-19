import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouteInfo } from 'src/app/interfaces/sidebar/routeInfo.int';

var misc: any = {
  sidebar_mini_active: true
};

//Menu Items
export const ROUTES: RouteInfo[] = JSON.parse( window.localStorage.getItem('menu') );

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  isAdmin: boolean = false;


  constructor(private router: Router) {}

  ngOnInit() {
    this.validateRole();
	  // let menu = JSON.parse( window.localStorage.getItem('menu') );
    // this.menuItems = menu.filter(menuItem => menuItem);
    // this.router.events.subscribe(event => {
    //   this.isCollapsed = true;
    // });
    const routeLink = this.router.url;
    this.active(routeLink.substring(1, routeLink.length));
    
  }

  validateRole(){
    let role = window.localStorage.getItem('role');
    console.log(role);
    if (role == '0') {
      this.isAdmin = true;
    }
  }

  active(classname){
    let lengh = 2; 
    let role = window.localStorage.getItem('role');
    if (role != '0') {
      lengh = 1; 
    }
    for (let i = 0; i < lengh; i++) { 
      const desactiveButton = document.getElementsByClassName("nav__item")[i];
      desactiveButton.classList.remove("nav__item--isActive");
    }

    const activeButton = document.getElementsByClassName(classname)[0];
    activeButton.classList.add("nav__item--isActive");
    
  }
}
