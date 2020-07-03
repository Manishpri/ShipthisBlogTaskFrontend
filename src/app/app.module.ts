import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpClientModule } from '@angular/common/http'
import { BlogserviceService } from './blogservice.service';

import { BlogGuard } from './blog.guard';
// 
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BlogserviceService,BlogGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
