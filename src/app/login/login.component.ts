import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginTitle = 'Login';
   public nameProp = '';
   public passwordProp = '';
  constructor() { }

  ngOnInit(): void {

  }
   
  OnSubmitLoginForm(){
     console.log(this.nameProp + this.passwordProp);
     return this.nameProp + this.passwordProp; 
  }

}
