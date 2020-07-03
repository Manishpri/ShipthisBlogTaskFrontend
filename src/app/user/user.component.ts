import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { BlogserviceService } from '../blogservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: BlogserviceService, private fb:FormBuilder, private router : Router) { }
  userForm = this.fb.group({
   
    userName : ['',[Validators.required]],
    pass : ['',[Validators.required,Validators.minLength(5)]],
    dateOfBirth:['',[Validators.required]],
  })
  ngOnInit(): void {
  }
  get f(){
    return this.userForm.controls
  }
  signUp(){
    this.service.user(this.userForm.value).subscribe(response=>{
     if(response['status']=='success'){
        localStorage.setItem('_id',response['response']._id);
        this.router.navigate(['/login']);
     }else{
      alert('Some thing happened during user creation');
     }
    })
  }

}
