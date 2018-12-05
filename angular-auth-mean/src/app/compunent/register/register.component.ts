import { AuthService } from './../../services/auth.service';
import { ValidationService } from './../../services/validation.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register={
    name:'',
    username:'',
    email:'',
    password:''
  }
  constructor(private validate: ValidationService,private authService:AuthService,private route:Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    if(!this.validate.validateRegister(this.register)){
    console.log("Please fill all field")
    return false
    }
    if(!this.validate.validateEmail(this.register.email)){
      console.log("please provide valid email")
      return false
    }
this.authService.regesterUser(this.register).subscribe((responseData)=>{
  if(responseData.success){
this.route.navigate(['/login'])
  }
})
  }

}
