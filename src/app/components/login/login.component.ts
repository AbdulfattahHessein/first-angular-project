import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  login() {
    this.authService.login('username', 'password');

    const redirectUrl = this.authService.redirectUrl || '/Home';
    this.router.navigate([redirectUrl]);
    this.authService.redirectUrl = '';
  }
  ngOnInit() {}
}
