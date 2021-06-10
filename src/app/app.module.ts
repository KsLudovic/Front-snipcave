import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
