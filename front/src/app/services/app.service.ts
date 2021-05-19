import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { apiResponse } from "../interfaces/apiResponse.int";

@Injectable()
export class appService {
    constructor( private http: HttpClient) { }

    auth(data) {
        return this.http.post<apiResponse>(`${environment.apiUrl}/auth/login`,data);
    }

    logout() {
        window.localStorage.clear();
        
    }

    valLogin() {
        let token = window.localStorage.getItem('id');
        if (token != null) {
            return true;
        }else{
            return false;
        }
        
    }
    
}
