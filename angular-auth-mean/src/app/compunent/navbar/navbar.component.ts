import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onLogoutClick(){
this.authservice.logout();
this.router.navigate(['/login']);
return false;
  }

}
