import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL=''

  constructor(private http: HttpClient) { }

  //register
  register(user:IUser):Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}/auth/register`,user)
  }

  //login
  login(user:any): Observable<any>{
    return this.http.post<any>(`https://api.escuelajs.co/api/v1/auth/login`,user)
  }

  //logout
  logout(){
    localStorage.clear();
  }

  //check login status
  getToken(): boolean{
    if(localStorage.getItem('token')){
      //if true user is already logged in
      return true;
    }

    else{
      //if false user is logged out
      return false;
    }
  }
}
