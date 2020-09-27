import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import {MustMatch} from '../shared/must-Match.validator';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { AlertService } from '../shared/alert.service';
import { UserService } from '../shared/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService,
              private alertService: AlertService) 
              { 
                if (this.authenticationService.currentUserValue) { 
                  this.router.navigate(['/']);
                }
              }

  ngOnInit(): void { 

    this.onSubmit();

    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
      }, {
      validator: MustMatch('password', 'confirmPassword')
    });
     
  }

  
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/singIn']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

  // ----------use to store the localStorage method-------------

  // onSubmit() {
  //   console.log(this.registerForm.value);
  //   this.submitted = true;
  //   this.user = Object.assign(this.user, this.registerForm.value);
  //   this.addUser(this.user);
  //   this.registerForm.reset();

  // }

  // ------------------------------------------------------------



// ----------use to store the localStorage -------------
// addUser(user) {
// let users = [];
// if (localStorage.getItem('Users')) {
//   users = JSON.parse(localStorage.getItem('Users'));
//   users = [user, ...users];
// }else {
//   users = [user];
// }
// localStorage.setItem('Users', JSON.stringify(users));
// }

// onReset() {
//     this.submitted = false;
//     this.registerForm.reset();
// }

// -------------------------------------------------------------

}
