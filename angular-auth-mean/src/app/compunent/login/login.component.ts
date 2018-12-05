import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
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
  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit() {
  }

  onLoginSubmit(){
  
    this.authService.loginUser(this.login).subscribe((response)=>{
if(response.success){
  this.authService.storeUser(response.token,response.user)
this.route.navigate(['/dashboard'])
}else{
  this.route.navigate(['/login'])
}

    })
  }

}
