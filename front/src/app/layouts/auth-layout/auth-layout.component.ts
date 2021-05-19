import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { appService } from 'src/app/services/app.service';

@Component({
    selector: "app-auth-layout",
    templateUrl: "./auth-layout.component.html",
    styleUrls: ["./auth-layout.component.scss"]
})
export class AuthLayoutComponent implements OnInit, OnDestroy {

    constructor(
        private apiService: appService,
        private router: Router
    ) {}

    ngOnInit() {
        this.valLogin();
    }

    ngOnDestroy() {
    }

    valLogin(): any {
        let validate = this.apiService.valLogin();
        if (validate) {
            this.router.navigate(['dashboard']);
        }
	}
}