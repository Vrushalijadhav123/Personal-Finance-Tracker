import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let payload={
      username: username,
      password: password
    }
   return this.http.post(`${this.apiUrl}/Auth/login`, payload);
}
}
