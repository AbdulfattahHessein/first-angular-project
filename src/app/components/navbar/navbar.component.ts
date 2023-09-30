import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    private navigationService: NavigationService
  ) {
    this.isUserLoggedIn = this.authService.isAuthenticated;
    this.isHomePage = false;
  }
  logo: string = '../../../assets/images/store-logo.jpg';
  isUserLoggedIn: boolean;
  isHomePage: boolean;
  logout() {
    this.authService.logout();

    this.authService.redirectUrl = this.router.url;
    this.router.navigate(['Login']);
  }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(
      (status) => (this.isUserLoggedIn = status)
    );
    this.navigationService.isHomePage.subscribe((status) => {
      this.isHomePage = status;
    });
  }
}
