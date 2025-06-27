import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://personalfinancetrackerapi-g4gegrgqardsf2d4.canadacentral-01.azurewebsites.net'; // Change if hosted

  constructor(private http:HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let payload={
      username: username,
      password: password
    }
   return this.http.post(`${this.apiUrl}/Auth/login`, payload);
}
}
