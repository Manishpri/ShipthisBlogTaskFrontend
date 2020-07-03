import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogGuard } from './blog.guard'


const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : '', redirectTo:'/login', pathMatch:'full'},
  {path : 'registration' , component : UserComponent},
  {path : 'blog' , component : BlogsComponent, canActivate:[BlogGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
