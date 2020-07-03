import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { BlogserviceService } from '../blogservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  image:any =null;
  updateImage:any=null;
  constructor( private fb:FormBuilder,private service : BlogserviceService,private router:Router ) { }
  allBlogs:any=[]
  blog:any=[]
  blogForm=this.fb.group({
    title : '',
    description:'',
    image :[null]
  })
  updateblogForm=this.fb.group({
    _id:'',
    title : '',
    description:'',
    image :[null]
  })
  ngOnInit(): void {
    this.service.findAllBlogs().subscribe(response=>{
      this.allBlogs =response['response'];
    })
  }
  onFileChanged(event:any){
    this.image = <File>event.target.files[0];
    this.blogForm.patchValue({
      image : this.image
    });
    this.blogForm.get('image').updateValueAndValidity()
  }
  onUpdateFileChanged(event:any){
    this.updateImage = <File>event.target.files[0];
    this.updateblogForm.patchValue({
      image : this.updateImage
    });
    this.updateblogForm.get('image').updateValueAndValidity()
  }
  submitBlog(){
    this.service.createBlog(this.blogForm.value.title,this.blogForm.value.description,this.blogForm.value.image).subscribe(response=>{
      if(response['status']=='success'){
            this.service.findAllBlogs().subscribe(response=>{
              this.allBlogs=response['response']
            });
            this.blogForm.reset();
      }else{
        alert('Something went wrong')
      }
    })
  }
  editblog(blog){
    this.blog = blog;
    document.getElementById('updateblog').style.display = 'block';
    document.getElementById('blogForm').style.display = 'none';


  }
 
  updateblog(){
    this.service.updateBlogs(this.updateblogForm.value._id,this.updateblogForm.value.title,this.updateblogForm.value.description,this.updateblogForm.value.image).subscribe(response=>{
      if(response['status']=='success'){
        this.service.findAllBlogs().subscribe(response=>{
          this.allBlogs =response['response'];
          alert('your data successfully updated')
        })
      }else{
        alert('Something went wrong ')
      }
    })
  }
  deleteblog(id){
    this.service.deleteBlogs(id).subscribe(response=>{
      if(response['status'] == 'success'){
        this.service.findAllBlogs().subscribe(response=>{
          this.allBlogs = response['response']
          alert('Your Blog Deleted Successfully')
        })
      }else{
        alert('Something went wrong');
      }
    })
  }
  logout(){
    localStorage.removeItem('logout');
    this.router.navigate(['/login'])
  }
}
