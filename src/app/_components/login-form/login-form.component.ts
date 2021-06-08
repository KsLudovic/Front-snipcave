import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { LoginRequestPayload } from 'src/app/_models/login-request.payload';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  registerSuccessMessage: string;
  isError: boolean;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
    private router: Router, private toastr: ToastrService) {
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.activatedRoute.queryParams
      .subscribe(params => {
        if (params.registered !== undefined && params.registered === 'true') {
          this.toastr.success('Signup Successful');
          this.registerSuccessMessage = 'Please Check your inbox for activation email '
            + 'activate your account before you Login!';
        }
      });
  }

  login() {
    this.loginRequestPayload.username = this.loginForm.get('username')!.value;
    this.loginRequestPayload.password = this.loginForm.get('password')!.value;

    this.authService.login(this.loginRequestPayload).subscribe(data => {
      this.isError = false;
      this.router.navigateByUrl('');
      this.toastr.success('Login Successful');
    }, error => {
      this.isError = true;
      throwError(error);
    });
  }
}