import { Component, OnInit } from "@angular/core";
import { userService } from 'src/app/services/user/user.service';

@Component({
	selector: "app-dashboard",
	templateUrl: "dashboard.component.html",
	styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
	id: any = window.localStorage.getItem('id');
	name: any = window.localStorage.getItem('name');
	role: any = window.localStorage.getItem('role');
	phone: any = '';
	mail: any = '';

	constructor(
		private userService: userService
	) {}

	ngOnInit() {
		this.getUser();
	}

	getUser(){
		this.userService.getUser(this.id).subscribe(result => {
			if(result.status == 200) {
				this.mail = result.data[0].mail;
				this.role = result.data[0].role;
				this.phone = result.data[0].phone;
			}
		})
	}

}