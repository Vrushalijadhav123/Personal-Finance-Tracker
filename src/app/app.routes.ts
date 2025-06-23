import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { ExpensesComponent } from '../Expense/expenses-list/expenses.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomePageComponent },
  { path: 'expenses', component: ExpensesComponent },
];