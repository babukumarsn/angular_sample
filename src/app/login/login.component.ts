import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    
    this.errorMessage = '';
    if (this.userName && this.password) {
      if (this.userName === 'admin' && this.password === 'admin') {
        sessionStorage.setItem('login', '1');
        this.router.navigate(['gallery']);
      } else {
        this.errorMessage = 'Please Enter valid User Name/Password'
      }
    } else {
      this.errorMessage = 'Please Enter User Name/Password'
    }

  }

}
