import { Component, OnInit, HostListener } from "@angular/core";
import { appService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { Subject } from "rxjs";

@Component({
	selector: "app-admin-layout",
	templateUrl: "./admin-layout.component.html",
	styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {
	
	userActivity;
	userInactive: Subject<any> = new Subject();

	constructor(
		private apiService: appService,
		private router: Router
	) {}
	ngOnInit() {
		this.valLogin();
	}

	valLogin(): any {
        let validate = this.apiService.valLogin();
		console.log(validate);
        if (validate == false) {
            this.router.navigate(['login']);
        }
	}

	TimeInactive(){
		this.userActivity = setTimeout(() => this.userInactive.next(undefined), 300000);
    }

	@HostListener('window:mousemove') refreshUserState() {
		clearTimeout(this.userActivity);
		this.TimeInactive();
	}
}