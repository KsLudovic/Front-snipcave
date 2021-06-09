import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_pages/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './_components/login-form/login-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
  ],                    
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxWebstorageModule.forRoot(),
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
