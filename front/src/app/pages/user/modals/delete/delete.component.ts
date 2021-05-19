import { Component, OnInit, Input, Injectable } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { alert } from 'src/app/services/global/alert.global';
import { userService } from 'src/app/services/user/user.service';
import { UserComponent } from '../../user.component';

@Injectable()
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() selected: any[]= [];
  @Input() c: any;
  @Input() d: any;
	constructor(
		public activeModal: NgbActiveModal,
		private apiService: userService,
		private alert: alert,
		private user: UserComponent
	) {}

	ngOnInit() {
	}

	onSubmit() {
		this.apiService.deleteUser(this.selected[0].id).subscribe(result => {
			if(result.status == 200) {
				this.c('close');
				this.user.selected = [];
				this.user.getUsers();
				this.alert.success(result.data);
			}
		})
  	}
}
