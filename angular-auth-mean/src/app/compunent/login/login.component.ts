import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login={
  username:'',
  password:''
}
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onLoginSubmit(){
  
    this.authService.loginUser(this.login).subscribe((response)=>{
console.log(response)
    })
  }

}
