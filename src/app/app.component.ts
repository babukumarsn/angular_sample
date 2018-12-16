import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  isLoggedIn: boolean;

  ngOnInit() {
    this.isLoggedIn = sessionStorage.getItem('login') !== '1';
  }

  signOut() {
    sessionStorage.setItem('login', '0');
  }
}
