import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ 
    CommonModule,
  ReactiveFormsModule,
    SharedModule,
     MatFormFieldModule,
    MatInputModule,
    MatButtonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

loginForm:FormGroup;

constructor(
  private fb:FormBuilder,
  private authService: AuthService,
 ) {
  this.loginForm = this.fb.group({
    userName:['',[Validators.required]],
    password:['',Validators.required]
  })
}

onSubmit(){
  const username = this.loginForm.get('userName')?.value;
const password = this.loginForm.get('password')?.value;
this.authService.login(username,password).subscribe({
  next: (response:any) => {
    console.log('Login successful', response);
    // Handle successful login, e.g., redirect to dashboard
  },
  error: (error:any) => {
    console.error('Login failed', error);
    // Handle login error, e.g., show an error message
  }
})

}

}
