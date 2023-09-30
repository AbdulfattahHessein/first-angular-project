import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {
    this._loginStatus$ = new BehaviorSubject<boolean>(this.isAuthenticated);
    this.redirectUrl = '';
  }

  private _loginStatus$: BehaviorSubject<boolean>;
  public redirectUrl: string;
  public get isAuthenticated() {
    let token = localStorage.getItem('token');
    return token ? true : false;
  }
  get isLoggedIn$() {
    return this._loginStatus$.asObservable();
  }

  login(username: string, password: string) {
    let token = this.generateToken(username, password);
    this.setToken(token);
    this.updateLoginStatus();
  }
  logout() {
    this.removeToken();
    this.updateLoginStatus();
  }

  //#region Private Interfaces
  private setToken(token: string) {
    localStorage.setItem('token', token);
  }
  private removeToken(): void {
    localStorage.removeItem('token');
  }
  private generateToken(username: string, password: string): string {
    let token = username + '@' + password;
    return token;
  }
  private updateLoginStatus() {
    this._loginStatus$.next(this.isAuthenticated);
  }
  //#endregion
}
