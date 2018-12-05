import { IRegister } from './../shared/interfaces/register';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { REGISTER, LOGIN, GET_PROFILE } from '../shared/globals/api-endingPoint';
import { Ilogin } from '../shared/interfaces/login'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: string;
  user: object;
  constructor(private http: HttpClient) { }
  regesterUser(user): Observable<IRegister> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<IRegister>(REGISTER, user, { headers: headers });
  }

  loginUser(loginUser): Observable<Ilogin> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Ilogin>(LOGIN, loginUser, { headers: headers });

  }

  storeUser(token, userInfo) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(userInfo))
    this.authToken = token;
    this.user = userInfo;
  }
  getProfile(){
    this.getToken();
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
     headers.append('Authorization','jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVjMDdmYzcwOWVmZWRmYjZiNGY0N2YxOCIsIm5hbWUiOiJhcWliIGphdmVkIiwiZW1haWwiOiJhcWliamF2ZWRAZ21pYWwuY29tIiwidXNlcm5hbWUiOiJhcWliIGphdmVkIiwicGFzc3dvcmQiOiIkMmEkMTAkTDdFQXRPc003emdveWg0SG5YTmVFT21PTDJMbUV0Rk9SMWh4WG9UeTFhdkxNbFFqL3hneEciLCJfX3YiOjB9LCJpYXQiOjE1NDQwMzE4NTUsImV4cCI6MTU0NDYzNjY1NX0.AYqmvrmsforggR1Bi0DmWDMcT1Ouz5AzrvJJJl3UhwE')
    return this.http.get(GET_PROFILE,{ headers: headers });
  }
  getToken() {
    this.authToken=localStorage.getItem('id_token');
  }
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
