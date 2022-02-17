import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpTitle = 'SignUp';
  public nameProp : string = '';
  public phoneNoProp : number = +91 ;
  public emailProp : string = '';
  public passwordProp : string = '';

  constructor() {
   
   }

  ngOnInit(): void {
  }

  SubmitSignUpForm()
  {
    console.log(this.nameProp+ 'has entered his details sign up succesfull');
  }


}
