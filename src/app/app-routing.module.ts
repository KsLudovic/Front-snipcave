import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsFormComponent } from './_components/user-details-form/user-details-form.component';
import { CharterComponent } from './_pages/charter/charter.component';
import { ContactComponent } from './_pages/contact/contact.component';
import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_pages/login/login.component';
import { PostsComponent } from './_pages/posts/posts.component';
import { SignupComponent } from './_pages/signup/signup.component';
import { UserProfilComponent } from './_pages/user-profil/user-profil.component';


const routes: Routes = [
  {path:"" , component : HomeComponent},
  {path:"login", component : LoginComponent},
  {path:"signup", component : SignupComponent},
  {path:"posts", component : PostsComponent},
  {path:"charter", component : CharterComponent},
  {path: "contact", component: ContactComponent },
  {
    path: "user", component: UserProfilComponent, children: [
      {path:"setting",component:UserDetailsFormComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
