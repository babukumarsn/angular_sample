import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  firstName: string;
  lastName: string;
  dob: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;

  constructor() { }

  ngOnInit() {
  }

  onSignUp(): void {

  }

}
