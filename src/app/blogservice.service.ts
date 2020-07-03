import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {
  baseUrl = "http://localhost:8080/api/"
  constructor(private http : HttpClient) { }
   
  user(userForm){
    return this.http.post(this.baseUrl +'user/create',userForm);
  }
  login(loginForm){
    return this.http.post(this.baseUrl+'user/login',loginForm);
  }
  createBlog(title:string,description:string,image:File){
    const blogs = new FormData();
    blogs.set('title',title);
    blogs.set('description',description);
    blogs.set('image',image);
    return this.http.post(this.baseUrl+'blog/create',blogs);
  }
  findAllBlogs(){
    return this.http.get(this.baseUrl+'blog/findAll');
  }
  updateBlogs(_id:string,title:string,description:string,image:File){
    const blogs = new FormData();
    blogs.set('title',title);
    blogs.set('description',description);
    blogs.set('image',image);
    return this.http.put(this.baseUrl+'blog/update/'+_id,blogs);
  }
  deleteBlogs(id){
    return this.http.delete(this.baseUrl+'blog/delete/'+id)
  }
  isLoggedIn(){
    return localStorage.getItem('logout') !== null
  }

}
