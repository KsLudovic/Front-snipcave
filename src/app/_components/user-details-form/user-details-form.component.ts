import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css']
})
export class UserDetailsFormComponent implements OnInit {

  userFormSetting: FormGroup;
  @Output() userEvent = new EventEmitter<UserDetailsFormComponent>();

  constructor(private fb: FormBuilder, private router: Router) {
    this.userFormSetting = fb.group({
      email: ["", Validators.email],
      username: ["", Validators.email],
      password: ["", Validators.email]
    })
   }

  ngOnInit(): void {
  }
  onSubmit = () => {
    
  }
  back() {
    this.router.navigate(["/user"]);
  }
}
