import { Component, OnInit, Input, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { userService } from 'src/app/services/user/user.service';
import { alert } from 'src/app/services/global/alert.global';
import { UserComponent } from '../../user.component';

@Injectable()
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;
  country:any;
  role:any;
  @Input() selected: any[]= [];
  @Input() c: any;
  @Input() d: any;
	constructor(
		public activeModal: NgbActiveModal,
		private formBuilder: FormBuilder,
		private apiService: userService,
		private alert: alert,
		private user: UserComponent
	) {}

	ngOnInit() {
		this.updateForm = this.formBuilder.group({
			name: [this.selected[0].name, Validators.required],
			phone: [this.selected[0].phone],
			mail: [this.selected[0].mail, Validators.required],
			// password: [''],
			role: [this.selected[0].id_role, Validators.required],
		})
	}

	onSubmit() {
		if(this.updateForm.invalid) {
			return;
		}
		this.apiService.updateUser(this.updateForm.value,this.selected[0].id).subscribe(result => {
			if(result.status == 200) {
				this.c('close');
				this.user.selected = [];
				this.user.getUsers();
				this.alert.success(result.data);
			}
		})
  	}
}
