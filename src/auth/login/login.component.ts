import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../shared/shared.module';

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

constructor(private fb:FormBuilder) {
  this.loginForm = this.fb.group({
    userName:['',[Validators.required]],
    password:['',Validators.required]
  })
}

onSubmit(){

}

}
