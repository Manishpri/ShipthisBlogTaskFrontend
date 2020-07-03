import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { BlogserviceService } from './blogservice.service'

@Injectable({
  providedIn: 'root'
})
export class BlogGuard implements CanActivate {
 constructor(private router:Router,private service : BlogserviceService){

 }
 canActivate():boolean{
   if(this.service.isLoggedIn()){
     return true
   }else{
     this.router.navigate(['/login']);
     return false
   }
 }
  
}
