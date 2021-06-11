import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent} from 'src/app/_components/login-form/login-form.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptor } from './token-interceptor';
import { SignupComponent } from './_pages/signup/signup.component';
import { SignupFormComponent } from './_components/signup-form/signup-form.component';
import { HomeComponent } from './_pages/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { HeaderComponent } from './_components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostsComponent } from './_pages/posts/posts.component';
import { CharterComponent } from './_pages/charter/charter.component';
import { ContactComponent } from './_pages/contact/contact.component';
import { PostCardComponent } from './_components/post-card/post-card.component';
import { CharterSectionComponent } from './_components/charter-section/charter-section.component';
import { ContactFormComponent } from './_components/contact-form/contact-form.component';

import { UserProfilComponent } from './_pages/user-profil/user-profil.component';
import { UserDetailsFormComponent } from './_components/user-details-form/user-details-form.component';

import { CarouselComponent } from './_components/carousel/carousel.component';
import { HomeBodyComponent } from './_components/home-body/home-body.component';
import { UserProfileComponent } from './_components/user-profile/user-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    SignupComponent,
    SignupFormComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    PostsComponent,
    CharterComponent,
    ContactComponent,
    ContactFormComponent,
    PostCardComponent,
    CharterSectionComponent,

    UserProfilComponent,
    UserDetailsFormComponent,

    CarouselComponent,
    HomeBodyComponent,
    UserProfileComponent,

  ],                    
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxWebstorageModule.forRoot(),
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
