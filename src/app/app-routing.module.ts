import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharterComponent } from './_pages/charter/charter.component';
import { ContactComponent } from './_pages/contact/contact.component';
import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_pages/login/login.component';
import { PostsComponent } from './_pages/posts/posts.component';
import { SignupComponent } from './_pages/signup/signup.component';


const routes: Routes = [
  {path:"" , component : HomeComponent},
  {path:"login", component : LoginComponent},
  {path:"signup", component : SignupComponent},
  {path:"posts", component : PostsComponent},
  {path:"charter", component : CharterComponent},
  {path:"contact", component : ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
