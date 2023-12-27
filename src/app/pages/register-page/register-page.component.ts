import { Component } from '@angular/core';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  userModel: IUser={}

  constructor(){

    //dummy data
    // this.userModel ={
    //   firstName:'Mark',
    //   email :'m@gmail.com',
    //   mobile : 999,
    //   password:'12345667'
    }

    onSubmitHandler(){
      console.log(this.userModel)
    }
  }
  

