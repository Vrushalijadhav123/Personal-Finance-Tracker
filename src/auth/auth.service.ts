import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://personalfinancetrackerapi-g4gegrgqardsf2d4.canadacentral-01.azurewebsites.net/api'; // Change if hosted

  constructor(private http:HttpClient) { }

  login(username: string, password: string): any {
   this.http.post(`${this.apiUrl}/login`, { username, password }).subscribe(
      response => {     
        // Handle successful login response
        console.log('Login successful', response);
        return true; // Login successful
      },
      error => {
        // Handle login error
        console.error('Login failed', error);
        return false; // Login failed
      } )
    }
}
