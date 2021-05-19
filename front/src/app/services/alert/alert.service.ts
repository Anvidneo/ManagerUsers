import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { apiResponse } from 'src/app/interfaces/apiResponse.int';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class alertService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    getAlerts() {
        let data = { 'token': window.localStorage.getItem('token') };
        return this.http.post<apiResponse>(`${environment.apiUrl}alert/get`,data).pipe(
            tap(result => {
                if(result.status == 401) {
                    this.router.navigate(['/login']);
                }
            }, error => {
                console.log(error);
            })
        );
    }

    createAlert(form) {
        let data = { 
            'token': window.localStorage.getItem('token'),
            'data' : form
        };
        return this.http.post<apiResponse>(`${environment.apiUrl}alert/create`,data).pipe(
            tap(result => {
                if(result.status == 401) {
                    this.router.navigate(['/login']);
                }
            }, error => {
                console.log(error);
            })
        );
    }

    updateAlert(form,id) {
        let data = { 
            'token': window.localStorage.getItem('token'),
            'data' : form,
            'id' : id
        };
        return this.http.post<apiResponse>(`${environment.apiUrl}alert/update`,data).pipe(
            tap(result => {
                if(result.status == 401) {
                    this.router.navigate(['/login']);
                }
            }, error => {
                console.log(error);
            })
        );
    }

    deleteAlert(id) {
        let data = { 
            'token': window.localStorage.getItem('token'),
            'id' : id
        };
        return this.http.post<apiResponse>(`${environment.apiUrl}alert/delete`,data).pipe(
            tap(result => {
                if(result.status == 401) {
                    this.router.navigate(['/login']);
                }
            }, error => {
                console.log(error);
            })
        );
    }
}