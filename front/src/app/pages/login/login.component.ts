import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appService } from 'src/app/services/app.service';
import { alert } from 'src/app/services/global/alert.global';

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  loginForm: FormGroup;
	invalidLogin: boolean = false;

	constructor(private formBuilder: FormBuilder,
				private appService: appService,
				private route: Router,
				private alert: alert,
	) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			mail: ['', Validators.required],
			password: ['', Validators.required]
		});
	} 
  
	onSubmit() {
		if(this.loginForm.invalid) {
			if (this.loginForm.controls['password'].hasError('required') && this.loginForm.controls['mail'].hasError('required')) {
				this.alert.errorSmall("Todos los campos son requeridos, Por favor validar");
			}else{
				if (this.loginForm.controls['password'].hasError('required')) {
					this.alert.errorSmall("El campo de contraseña es requerido, Por favor validar");
				}else{
					if (this.loginForm.controls['mail'].hasError('required')) {
						this.alert.errorSmall("El campo de correo es requerido, Por favor validar");
					}
				}
			}
			return;
		}

		const sendData = {
			mail : this.loginForm.controls.mail.value,
			password : this.loginForm.controls.password.value
		}

		this.appService.auth(sendData).subscribe(result => {
			if(result.status == 200) {
				window.localStorage.setItem('id',result.data[0].id);
				window.localStorage.setItem('name',result.data[0].name);
				window.localStorage.setItem('role',result.data[0].role);
				// console.log(result.data[0].id);
				this.route.navigate(['dashboard']);
			}else{
				this.alert.error("Credenciales invalidas, verifique sus credenciales.");
			}
		}, error => {
			this.alert.error("Credenciales invalidas, verifique sus credenciales.");
		})
	}
}
