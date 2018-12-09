import { Injectable } from "@angular/core";
import{Router,CanActivate} from "@angular/router"
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authSerive:AuthService,private route:Router){
    }
    canActivate(){
        if(this.authSerive.isTokenExpired()){
this.route.navigate(['/login'])
return false;
        }
        else{
            return true;
        }
    }
}
