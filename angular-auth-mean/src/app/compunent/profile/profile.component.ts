import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:object
  constructor(private authservice:AuthService, private route:Router) { }

  ngOnInit() {
    this.authservice.getProfile().subscribe((response)=>{
this.user=response;   
    },err=>{
    })
  }


}
