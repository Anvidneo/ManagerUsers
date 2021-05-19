import { appService } from 'src/app/services/app.service';
import { userService } from 'src/app/services/user/user.service';
import { Injectable } from '@angular/core';
import { RouteInfo } from 'src/app/interfaces/sidebar/routeInfo.int';

@Injectable()
export class sidebarService {
	me:any;

	constructor(
		private user: userService,
    ) {}


	getMenu(role): any {
		let menu: RouteInfo[];
		this.user.getMenu(role).subscribe(result => {
			if(result.status == 200) {
				let data = result.data;
				let count = data.length;
				for (let i = 0; i < count; i++) {
					menu[i] = { 
						path: data.path,
						title: data.title, 
						type: data.type, 
						icontype: data.icon
					}
				}
                return menu;
			} else {
                return 0;
            }
		});

	}
}