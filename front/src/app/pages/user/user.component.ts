import {Component,OnInit, Injectable} from '@angular/core';
import { userService } from 'src/app/services/user/user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { alert } from 'src/app/services/global/alert.global';

@Injectable()
@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
	closeResult: string;
	clients:any[];
	entries: number = 8;
	selected: any[] = [];
	tempUsers:any[];
	activeRow: any;
	rows: any = [];
	idClientSelect: number;
	error: any; 
	tamWindow: any;

	constructor(
		public userService: userService,
		private modalService: NgbModal,
		private alert: alert,
	) { }
	
	ngOnInit() {
		setInterval(()=> {this.validateWindows() } , 1000);
		this.getUsers();
	}

	public validateWindows(){
		this.tamWindow = screen.height;
		if (this.tamWindow <= 800) {
			this.entries = 6;
		}else{
			this.entries = 8;
		}
	}

	public getUsers() {
		this.userService.getUsers().subscribe(result => {
			if(result.status == 200) {
				this.rows = result.data;
				this.tempUsers = this.rows.map((prop, key) => {
					let id = prop.id;
					return {
						...prop,
						id: id
					};
				});
			}
		});
	}

	filterTable($event) {
		let val = $event.target.value;
		this.tempUsers = this.rows.filter(function (d) {
			for (var key in d) {
				if(d[key] !== null) {
					if (d[key].toString().indexOf(val) !== -1) {
						return true;
					}
				}
			}
			return false;
		});
	}

	open(content) {
		this.modalService.open(content, { windowClass: 'modal-mini', size: 'lg', centered: false }).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	openEdit(content) {
		if(this.selected.length > 0) {
			this.modalService.open(content, { windowClass: 'modal-mini', size: 'lg', centered: false }).result.then((result) => {
				this.closeResult = `Closed with: ${result}`;
			}, (reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			});
		} else {
			this.alert.error('Para poder editar debe seleccionar un registro.');
		}
	}

	openDelete(content){
		if(this.selected.length > 0) {
			this.modalService.open(content, { windowClass: 'modal-mini', size: 'lg', centered: false }).result.then((result) => {
				this.closeResult = `Closed with: ${result}`;
			}, (reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			});
		} else {
			this.alert.error('Para poder eliminar debe seleccionar un registro.');
		}
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return  `with: ${reason}`;
		}
	}

	onSelect({
		selected
	}) {
		console.log(selected);
		this.selected.splice(0, this.selected.length);
		this.selected.push(selected[0]);
	}

}