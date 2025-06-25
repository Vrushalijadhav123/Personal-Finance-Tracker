import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Expense {
  id?: number;
  category: string;
  amount: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private apiUrl = 'https://personalfinancetrackerapi-g4gegrgqardsf2d4.canadacentral-01.azurewebsites.net/api/Expenses'; // Change if hosted

  constructor(private http: HttpClient) { }

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.apiUrl);
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.apiUrl, expense);
  }

  deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}