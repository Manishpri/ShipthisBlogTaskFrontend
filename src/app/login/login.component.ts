import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { BlogserviceService } from '../blogservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: BlogserviceService, private fb:FormBuilder, private router : Router) { }
  loginForm : FormGroup
  
  ngOnInit(): void {
    const _id = localStorage.getItem('_id')
    this.loginForm = this.fb.group({
      id : _id,
      userName : '',
      pass : ''
    })
  }
 
  login(){
    
    this.service.login(this.loginForm.value).subscribe(response=>{
      if(response['status'] == 'success'){
        localStorage.setItem('logout',response['status'])
        this.router.navigate(['/blog'])
      }else{
        alert('Incorrect UserName or Password,Please Signup')
      }
    })
  }

}
