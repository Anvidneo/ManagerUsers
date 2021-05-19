import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { apiResponse } from 'src/app/interfaces/apiResponse.int';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class userService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    getUser(id) {
        return this.http.get<apiResponse>(`${environment.apiUrl}/users/${id}`).pipe(
            tap(result => {
                if(result.status == 401) {
                    this.router.navigate(['/login']);
                } else {
                    console.log(result);
                }
            }, error => {
                console.log(error);
            })
        );
    }


    getMenu(role) {
        let data = { 
            'token': window.localStorage.getItem('token'),
            'role': role
        };
        return this.http.post<apiResponse>(`${environment.apiUrl}user/getMenu`,data).pipe(
            tap(result => {
                if(result.status == 401) {
                    this.router.navigate(['/login']);
                }
            }, error => {
                console.log(error);
            })
        );
    }

    getUsers() {
        return this.http.get<apiResponse>(`${environment.apiUrl}/users/`).pipe(
            tap(result => {
                if(result.status == 401) {
                    this.router.navigate(['/login']);
                }
            }, error => {
                console.log(error);
            })
        );
    }

    createUser(form) {
        return this.http.post<apiResponse>(`${environment.apiUrl}/auth/register`,form).pipe(
            tap(result => {
                if(result.status == 401) {
                    this.router.navigate(['/login']);
                } else {
                    console.log(result);
                }
            }, error => {
                console.log(error);
            })
        );
    }

    updateUser(form,id) {
        return this.http.put<apiResponse>(`${environment.apiUrl}/users/update/${id}`,form).pipe(
            tap(result => {
                if(result.status == 401) {
                    this.router.navigate(['/login']);
                } else {
                    console.log(result);
                }
            }, error => {
                console.log(error);
            })
        );
    }

    deleteUser(id) {
        return this.http.delete<apiResponse>(`${environment.apiUrl}/users/delete/${id}`).pipe(
            tap(result => {
                if(result.status == 401) {
                    this.router.navigate(['/login']);
                } else {
                    console.log(result);
                }
            }, error => {
                console.log(error);
            })
        );
    }
}