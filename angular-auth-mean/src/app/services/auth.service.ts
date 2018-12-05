import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { REGISTER, LOGIN } from '../shared/globals/api-endingPoint';
import {Ilogin} from '../shared/interfaces/login'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  regesterUser(user){
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(REGISTER,user,{headers:headers});
  }

  loginUser(loginUser):Observable<Ilogin>{
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<Ilogin>(LOGIN,loginUser,{headers:headers});

  }
}
