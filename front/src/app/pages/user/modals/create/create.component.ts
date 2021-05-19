import { Component,OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userService } from 'src/app/services/user/user.service';
import { alert } from 'src/app/services/global/alert.global';
import { UserComponent } from '../../user.component';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
	createForm: FormGroup;
	country:any;
	role:any;
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
		this.createForm = this.formBuilder.group({
			name: ['', Validators.required],
			password: ['', Validators.required],
			role: ['', Validators.required],
			mail: ['', Validators.required],
			phone: ['', Validators.required]
		})
	}

	onSubmit() {
		if(this.createForm.invalid) {
			return;
		}
		this.apiService.createUser(this.createForm.value).subscribe(result => {
			if(result.status == 200) {
				this.user.getUsers();
				this.c('close');
				this.alert.success(result.data);
			}
		})
	}


}