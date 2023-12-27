import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  // loginForm = new FormGroup({
  //   email : new FormControl(),
  //   password: new FormControl()
  // });

  //instead of using new FormControl for binding each and every field in HTML form we use a new module FormBuilder
  responseText = ''
  alertClass= ''

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router : Router){}
  loginForm = this.formBuilder.group({
    email: [null,[Validators.required, Validators.email]],
    password: [null,[ Validators.required, Validators.minLength(6)]]
  })

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  onSubmitHandler(){
   // console.log(this.loginForm.value)
   this.authService.login(this.loginForm.value).subscribe((response:any)=>{
    //success
    this.responseText='Login success, Thank you'
    this.alertClass='alert alert-success'
    
    localStorage.setItem('token',response.access_token);  //access_token is the token given by API for the login credentials
    this.router.navigateByUrl('')

    console.log(response)

   },(error: any)=>{
    //failure
    this.responseText='Oops! something went wrong, try again'
    this.alertClass='alert alert-danger'
    console.log(error)
   })
  }

}
    
