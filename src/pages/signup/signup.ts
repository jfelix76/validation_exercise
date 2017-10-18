import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl, FormBuilder, AbstractControl } from '@angular/forms';
import { HomePage } from '../home/home';
import { EmailValidator } from "../../providers/email";

@Component({
  selector: 'signup-page',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: FormGroup;
  main_page: { component: any };
  emailIsInvalid: boolean = false;

  constructor(
    public nav: NavController,
    public fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public emailValidator: EmailValidator) {

    this.main_page = { component: HomePage };

    this.signup = this.fb.group({
      'email': ['', [
          // Synchronous Form Validators
          Validators.required,
          (control: AbstractControl) => this.emailValidator.validateEmail(control)
        ],
        [ 
          // Async Form Validators
          // safely passes the context of 'this' form control
          (control: AbstractControl) => this.emailValidator.doesExist(control)
        ]
      ],
      'password': ['', Validators.required],
      'confirm_password': ['', Validators.required]
    });
  }

  doSignup(){
    this.nav.setRoot(this.main_page.component);
  }

}
