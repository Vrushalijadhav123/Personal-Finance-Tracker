import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { ExpensesComponent } from '../Expense/expenses-list/expenses.component';
import { LoginComponent } from '../auth/login/login.component';
import { MainlayoutComponent } from '../Layout/mainlayout/mainlayout.component';
import { RegisterComponent } from '../auth/register/register.component';

export const appRoutes: Routes = [
  // Auth routes (no layout)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Main app routes (with layout)
  {
    path: '',
    component: MainlayoutComponent, // Create this component for your main layout
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'expenses', component: ExpensesComponent },
      // ...other main routes
    ]
  }
];